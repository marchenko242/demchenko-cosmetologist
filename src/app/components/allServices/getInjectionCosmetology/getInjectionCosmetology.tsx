'use client'

import React, {useEffect, useState} from 'react';
import {IServiceInjectionCosmetology} from "@/app/models/IServiceInjectionCosmetology";
import {getDataFromDataBases} from "@/app/services/api.service";
import style from "./styleForInjectionCosmetology.module.css"

const GetInjectionCosmetology = () => {

    const [injectionCosmetology, setInjectionCosmetology] = useState<IServiceInjectionCosmetology[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.injectionCosmetology.getInjectionCosmetology();
            setInjectionCosmetology(data.injectionCosmetology)
        }

        fetchData()
    }, []);
    
    return (
        <div>
            <h2 className={style.styleForH2}>Ін`єкційна косметологія:</h2>
            {
                injectionCosmetology.map((item) => (
                    <div key={item.id}><p className={style.styleForP}>{item.name} - {item.price}</p></div>))
            }

        </div>
    );
};

export default GetInjectionCosmetology;