import { useState, useEffect } from "react";

export type Data = {
    products: [
        {
            name: string;
            id: number;
            price: number;
            includeId?: number;
        }
    ],
    packages: [
        {
            id: number;
            includeId: Array<number>;
            price: number;
        }
    ],
    years: Array<number>;
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
    }, [year]);

    return data;
};

export default useGetData;