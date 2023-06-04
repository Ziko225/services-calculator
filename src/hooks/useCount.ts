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
            prices.push(findServiceById(id[i])?.price || 0);
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

            const isSpecialOfferMeetsTheRequirements = difference > 0 && data?.specialOffer[i].requiredId.every((id) => selectedServicesId.includes(id));

            isSpecialOfferMeetsTheRequirements && arrayWithDifference.push({
                id: [data!.specialOffer[i].id],
                difference: difference,
                price: data!.specialOffer[i].price
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
                price: data!.packages[i].price
            });
        }

        return arrayWithDifference.sort((a, b) => b.difference - a.difference);
    };

    const findDiscountWithIdAndDiference = (): { id: Array<number>, difference: number, price: number; } | undefined => {
        return findBestDiscounts().filter((e) => e.id.every((e) => selectedServicesId.includes(e)))[0];
    };

    const findDiscountNamesAndPrice = () => {
        if (!data) {
            return;
        }

        const discountId = findDiscountWithIdAndDiference()?.id || [];

        const discountNames: Array<string> = [];

        for (let i = 0; i < discountId.length; i++) {
            discountNames.push(findServiceById(discountId[i])?.name || "");
        }

        return { names: discountNames, price: findDiscountWithIdAndDiference()?.price || 0 };
    };

    const count = () => {
        if (!data) {
            return;
        }

        const countResult = selectedServicesId[0]
            ? countNumbers(selectedServicesId.map((serviceId) => findServiceById(serviceId).price))
            : 0;

        setPrice(countResult);

        const discountDifference = findDiscountWithIdAndDiference()?.difference;
        discountDifference ? setDiscountPrice(countResult - discountDifference) : setDiscountPrice(0);
    };

    useEffect(() => {
        count();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedServicesId]);

    return { price, discountPrice, findDiscountNamesAndPrice };
};

export default useCount;