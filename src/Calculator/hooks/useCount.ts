import { useEffect, useState } from "react";
import { Data } from "./useGetData";

const useCount = (data: Data, selectedServices: Array<number>) => {
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);

    const contains = (selectedServices: Array<number>, packages: Array<number>) => {
        for (let i = 0; i < packages.length; i++) {
            if (selectedServices.indexOf(packages[i]) === -1) {
                return false;
            }
        }
        return true;
    };

    const count = () => {
        if (!data) {
            return 0;
        }

        const arrayWithPrices: Array<number> = [];

        const countPriceInArrayWithPrices = () => {
            return arrayWithPrices.reduce((a, b) => a + b);
        };

        const filteredServicesById = data.products.filter((e) => selectedServices.includes(e.id)) || [];

        for (let i = 0; i < data.packages.length; i++) {
            contains(selectedServices, data.packages[i].id) && arrayWithPrices.push(data.packages[i].price);
        }

        if (arrayWithPrices[0]) {
            return countPriceInArrayWithPrices();
        }

        filteredServicesById.map((e) => arrayWithPrices.push(e.price));

        return arrayWithPrices[0] && countPriceInArrayWithPrices();
    };

    useEffect(() => {
        setPrice(count());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, selectedServices]);

    return { price, discountPrice };
};

export default useCount;