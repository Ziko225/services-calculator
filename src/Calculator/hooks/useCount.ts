import { Data } from "./useGetData";

const useCount = (data: Data, selectedServices: Array<number>) => {
    const count = () => {
        const selectedObjectsById = data?.products.filter((e) => selectedServices.includes(e.id)) || [];
        const arrayWithPrices: Array<number> = [];
        selectedObjectsById.map((e) => arrayWithPrices.push(e.price));
        return arrayWithPrices[0] ? arrayWithPrices.reduce((a, b) => a + b) : 0;
    };

    return count;
};

export default useCount;