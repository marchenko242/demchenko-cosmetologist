'use client'

import React, {useEffect, useState} from 'react';
import {IServiceHardwareCosmetology} from "@/app/models/IServiceHardwareCosmetology";
import {getDataFromDataBases} from "@/app/services/api.service";
import style from "@/app/components/allServices/getInjectionCosmetology/styleForInjectionCosmetology.module.css";

const GetHardwareCosmetology = () => {

    const [hardwareCosmetology, setHardwareCosmetology] = useState<IServiceHardwareCosmetology[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.hardwareCosmetology.getHardwareCosmetology()
            setHardwareCosmetology(data.hardwareCosmetology)
        }
        fetchData()
    }, []);

    return (
        <div>
            <h2 className={style.styleForH2}>Апаратна косметологія:</h2>
            {
                hardwareCosmetology.map((item) => (
                    <div key={item.id}><p className={style.styleForP}>{item.name} - {item.price}</p></div>))
            }

        </div>
    );
};

export default GetHardwareCosmetology;