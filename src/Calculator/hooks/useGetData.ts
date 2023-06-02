import { useState, useEffect } from "react";

export type Data = {
    services: [
        {
            name: string;
            id: number;
            price: number;
            includeId?: number;
        }
    ],
    packages: [
        {
            id: Array<number>;
            price: number;
        }
    ],
    specialOffer: [
        {
            id: number;
            includeId: Array<number>;
            price: number;
        }
    ];
} | null;

const useGetData = (year?: string) => {
    const [data, setData] = useState<Data>(null);

    const getData = async () => {
        try {
            const value = await fetch(`./exampleserver/${year || 2023}.json`);
            const decodedValue = await value.json();
            setData(decodedValue);
        } catch (error) {
            setData(null);
        }
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year]);

    return data;
};

export default useGetData;