'use client'

import React, {useEffect, useState} from 'react';
import {IServiceFacialContouring} from "@/app/models/IServiceFacialContouring";
import {getDataFromDataBases} from "@/app/services/api.service";
import style from "@/app/components/allServices/getInjectionCosmetology/styleForInjectionCosmetology.module.css";

const GetFacialContouring = () => {

    const [facialContouring, setFacialContouring] = useState<IServiceFacialContouring[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.facialContouring.getFacialContouring();
            setFacialContouring(data.facialContouring);
        }

        fetchData()
    }, []);

    return (
        <div>
            <h2 className={style.styleForH2}>Контурування обличчя:</h2>

            {
                facialContouring.map((item) => (
                    <div key={item.id}><p className={style.styleForP}>{item.name} - {item.price}</p></div>))
            }

        </div>
    );
};

export default GetFacialContouring;