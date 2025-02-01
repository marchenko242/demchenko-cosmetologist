'use client'

import {useEffect, useState} from 'react';
import {getDataFromDataBases} from "@/app/services/api.service";
import {IServiceBotox} from "@/app/models/Ibotox";
import style from "./botox.module.css"

const Botox = () => {
    const [services, setServices] = useState<IServiceBotox[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromDataBases.botox.getAllBotox();
            setServices(data.botox);
        };
        fetchData();
    }, []);



    return (
        <div>
            <h3 className={style.styleForH3}>BOTOX:</h3>
            {
                services.map((service) => <div className={style.styleForP} key={service.id}> <p>{service.name} {service.price}</p> </div>)
            }

        </div>
    );
};

export default Botox;