'use client';

import {useEffect, useState} from 'react';
import {IServiceLip} from "@/app/models/IlipСontouring";
import {getDataFromDataBases} from "@/app/services/api.service";
import style from "./lipContouring.module.css";

const Index = () => {
    const [services, setServices] = useState<IServiceLip[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.lips.getLips();
            setServices(data.lipСontouring);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 className={style.styleForH2}>Контурна пластика губ:</h2>
            {services.map((service) => <p className={style.styleForP}
                                          key={service.id}>{service.name} {service.amount} - {service.price}</p>)}

        </div>

    );
};

export default Index;
