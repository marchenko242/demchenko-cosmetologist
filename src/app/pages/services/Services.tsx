'use client'
import { useState } from "react";
import style from "./servicesStyles.module.css";
import GetlipOntouringData from "@/app/components/allServices/lips/GetlipСontouringData";
import GetCareCosmetology from "@/app/components/allServices/careCosmetology/GetCareCosmetology";
import Botox from "@/app/components/allServices/botox/Botox";
import GetInjectionCosmetology from "@/app/components/allServices/getInjectionCosmetology/getInjectionCosmetology";
import GetHardwareCosmetology from "@/app/components/allServices/hardwareCosmetology/GetHardwareCosmetology";
import GetFacialContouring from "@/app/components/allServices/facialContouring/GetFacialContouring";

const Index = () => {



    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const blocks = [
        { id: 0, component: <GetCareCosmetology />, title: "Доглядова косметологія" },
        { id: 1, component: <GetlipOntouringData />, title: "Контурна пластика губ" },
        { id: 2, component: <Botox />, title: "BOTOX" },
        { id: 3, component: <GetInjectionCosmetology />, title: "Ін`єкційна косметологія" },
        { id: 4, component: <GetHardwareCosmetology />, title: "Апаратна косметологія" },
        { id: 5, component: <GetFacialContouring />, title: "Контурування обличчя" },
    ];


    return (
        <div>
            <h2 className={style.blockForPrice}>Прайс:</h2>
            <div className={style.container}>
                <div className={style.positionOfServices}>
                    {blocks.map((block) => (
                        <div key={block.id}  className={`${style.block} ${
                                activeIndex === block.id ? style.active : activeIndex === null ? "" : style.collapsed}`}onClick={() => handleToggle(block.id)}>
                            <h3 className={`${style.header} ${activeIndex === block.id ? style.headerActive : ""}`}>
                                {block.title}
                            </h3>
                            {activeIndex === block.id && (
                                <div className={style.content}>{block.component}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={style.imageBlock}>
                    <img
                        className={style.imageStyle}
                        src="/imageForServices.png"
                        alt="Cosmetologist"
                    />
                    <img
                        className={style.imageStyleLogo}
                        src="/inWork.png"
                        alt="working"
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;

