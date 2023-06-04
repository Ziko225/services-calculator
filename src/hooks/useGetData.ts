import { useState, useEffect } from "react";

export type Data = {
    services: [
        {
            name: string;
            id: number;
            price: number;
            requiredId?: Array<number>;
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
            requiredId: Array<number>;
            price: number;
        }
    ];
} | null;

const useGetData = (initialState: string) => {
    const [data, setData] = useState<Data>(null);

    const [year, setYear] = useState(initialState);

    const findServiceById = (id: number) => {
        return data?.services.filter((e) => e.id === id).map((e) => e)[0];
    };

    const getData = async () => {
        if (year) try {
            const value = await fetch(`./exampleserver/${year}.json`);
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

    return { data, year, setYear, findServiceById };
};

export default useGetData;