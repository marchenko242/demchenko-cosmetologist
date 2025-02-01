import {IServiceLip} from "@/app/models/IlipСontouring";
import {IServiceCareCosmetology} from "@/app/models/ICareCosmetology";
import {IServiceBotox} from "@/app/models/Ibotox";
import {IServicePeeling} from "@/app/models/IServicePeeling";
import {IServiceInjectionCosmetology} from "@/app/models/IServiceInjectionCosmetology";
import {IServiceHardwareCosmetology} from "@/app/models/IServiceHardwareCosmetology";
import {IServiceFacialContouring} from "@/app/models/IServiceFacialContouring";
import {IImage} from "@/app/models/IImage";

export const getDataFromDataBases = {
    lips: {
        getLips: async (): Promise<{ lipСontouring: IServiceLip[] }> => {
            const response = await fetch('/data-bases/lipСontouring.json');
            const data = await response.json();
            console.log(data);
            return data;
        }
    },
    botox : {
        getAllBotox: async (): Promise<{botox: IServiceBotox[]}> => {
            const response = await fetch('/data-bases/botox.json');
            const data = await response.json();
            return data;
        }
    },
    careCosmetology: {
        getAllCareCosmetologyData: async (): Promise<{careCosmetology: IServiceCareCosmetology[]}> => {
            const response = await fetch('/data-bases/careCosmetology.json');
            const data = await response.json();
            return data;
        }
    },
    peelings: {
        getPeeling: async (): Promise<{ peelings: IServicePeeling[] }> => {
            const response = await fetch("/data-bases/peelings.json");
            const data = await response.json();
            return data;
        }
    },
    injectionCosmetology: {
        getInjectionCosmetology: async ():Promise<{injectionCosmetology: IServiceInjectionCosmetology[]}> => {
            const response = await fetch("/data-bases/injectionCosmetology.json");
            const data = await response.json();
            return data;
        }
    },
    hardwareCosmetology: {
        getHardwareCosmetology: async (): Promise<{hardwareCosmetology: IServiceHardwareCosmetology[]}> =>{
            const response = await fetch("/data-bases/hardwareCosmetology.json");
            const data = await response.json();
            return data;
        },
    },
    facialContouring: {
        getFacialContouring: async (): Promise<{facialContouring: IServiceFacialContouring[]}> => {
            const response = await fetch("/data-bases/facialContouring.json");
            const data = await response.json();
            return data;
        },
    }



}

