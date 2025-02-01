'use client'

import React, { useEffect, useState } from 'react';
import { IServicePeeling } from "@/app/models/IServicePeeling";
import { getDataFromDataBases } from "@/app/services/api.service";
import style from "./styleForPeeling.module.css"
import Link from "next/link";

const GetPeelings = () => {
    const [peelings, setPeelings] = useState<IServicePeeling[]>([]);

    useEffect(() => {
        const fetchData = async () => {

                const data = await getDataFromDataBases.peelings.getPeeling();
                setPeelings(data.peelings);

        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 className={style.styleForH2}>Пілінг:</h2>
            {
                peelings.map((peeling) => (
                    <div key={peeling.id}><p className={style.styleForP}>{peeling.name} - {peeling.price}</p></div>
                ))
            }
        </div>
    );
};

export default GetPeelings;
