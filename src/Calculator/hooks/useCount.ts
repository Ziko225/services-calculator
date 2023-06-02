import { useEffect, useState } from "react";
import { Data } from "./useGetData";

const useCount = (data: Data, selectedServicesId: Array<number>) => {
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);

    const findServicePriceById = (id: number) => {
        return data!.services.filter((e) => e.id === id).map((e) => e)[0];
    };

    const countPricesInArray = (array: Array<number>) => {
        return array.reduce((a, b) => a + b);
    };

    const findDifferenceBetweenPriceAndDiscount = (id: Array<number>, price: number) => {
        const prices = [];

        for (let i = 0; i < id.length; i++) {
            prices.push(findServicePriceById(id[i]).price);
        }

        return countPricesInArray(prices) - price;
    };

    const findBestDiscounts = () => {
        const arrayWithDifference = [];

        for (let i = 0; i < data!.packages.length; i++) {
            const difference = findDifferenceBetweenPriceAndDiscount(
                data!.packages[i].id,
                data!.packages[i].price
            );

            difference > 0 && arrayWithDifference.push({
                id: data!.packages[i].id,
                difference: difference,
            });
        }

        return arrayWithDifference.sort((a, b) => b.difference - a.difference);
    };

    const findDiscount = (price: number) => {
        const bestDiscounts = findBestDiscounts().filter((e) => e.id.every((e) => selectedServicesId.includes(e)));

        bestDiscounts[0] ? setDiscountPrice(price - bestDiscounts[0].difference) : setDiscountPrice(0);

        return bestDiscounts[0]?.difference;
    };

    const count = () => {
        if (!data) {
            return;
        }
        const calculateResult = selectedServicesId[0]
            ? countPricesInArray(selectedServicesId.map((serviceId) => findServicePriceById(serviceId).price))
            : 0;

        setPrice(calculateResult);
        findDiscount(calculateResult);
    };

    useEffect(() => {
        count();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, selectedServicesId]);

    return { price, discountPrice };
};

export default useCount;