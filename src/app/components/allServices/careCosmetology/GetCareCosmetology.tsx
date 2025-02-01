'use client'

import React, {useEffect, useState} from 'react';
import {IServiceCareCosmetology} from "@/app/models/ICareCosmetology";
import {getDataFromDataBases} from "@/app/services/api.service";
import style from "./styleForCareCosmetology.module.css"

const GetCareCosmetology = () => {

    const [careCosmetology, setCareCosmetology] = useState<IServiceCareCosmetology[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.careCosmetology.getAllCareCosmetologyData();
            setCareCosmetology(data.careCosmetology);
        }
        fetchData()
    }, []);


    return (
        <div>
            <h2 className={style.styleForH2}>Доглядова косметологія:</h2>
            {
                careCosmetology.map((care) => <p className={style.styleForP}
                                                  key={care.id}>{care.name} - {care.price}</p>)
            }

        </div>
    );
};

export default GetCareCosmetology;