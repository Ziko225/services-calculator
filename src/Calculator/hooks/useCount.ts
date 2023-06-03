import { useEffect, useState } from "react";
import { Data } from "./useGetData";

const useCount = (data: Data, selectedServicesId: Array<number>) => {
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);

    const findServiceById = (id: number) => {
        return data!.services.filter((e) => e.id === id).map((e) => e)[0];
    };

    const countNumbers = (array: Array<number>) => {
        return array.reduce((a, b) => a + b);
    };

    const findDifferenceBetweenPriceAndDiscount = (id: Array<number>, price: number) => {
        const prices = [];

        for (let i = 0; i < id.length; i++) {
            prices.push(findServiceById(id[i]).price);
        }

        return countNumbers(prices) - price;
    };

    const findBestDiscounts = () => {
        const arrayWithDifference = [];

        for (let i = 0; i < data!.specialOffer.length; i++) {
            const difference = findDifferenceBetweenPriceAndDiscount(
                [data!.specialOffer[i].id],
                data!.specialOffer[i].price
            );

            difference > 0 && arrayWithDifference.push({
                id: [data!.specialOffer[i].id],
                difference: difference,
            });
        }

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

    const findDiscount = (price?: number) => {
        const bestDiscount = findBestDiscounts().filter((e) => e.id.every((e) => selectedServicesId.includes(e)))[0];

        return bestDiscount || [];
    };

    const findDiscountNames = () => {
        if (!data) {
            return;
        }

        const discountId = findDiscount().id || [];

        const discountNames: Array<string> = [];

        for (let i = 0; i < discountId.length; i++) {
            discountNames.push(findServiceById(discountId[i]).name);
        }

        return discountNames;
    };

    const count = () => {
        if (!data) {
            return;
        }

        const countResult = selectedServicesId[0]
            ? countNumbers(selectedServicesId.map((serviceId) => findServiceById(serviceId).price))
            : 0;

        setPrice(countResult);
        setDiscountPrice(countResult - findDiscount().difference);
    };

    useEffect(() => {
        count();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedServicesId]);

    return { price, discountPrice, findDiscountNames };
};

export default useCount;