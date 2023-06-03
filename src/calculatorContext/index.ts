import { createContext } from "react";
import { Data } from "../hooks/useGetData";

type Props = {
    getSelectServices: {
        selectedServicesId: number[];
        addServices: (arrayWithId: number[]) => void;
        removeService: (index: number) => void;
        clearSelectedServices: () => void;
        isAnyRequiredService: boolean;
        setIsAnyRequiredService: React.Dispatch<boolean>;
    };
    getData: {
        data: Data;
        year: string;
        setYear: React.Dispatch<React.SetStateAction<string>>;
    };
    getCount: {
        price: number;
        discountPrice: number;
        findDiscountNamesAndPrice: () => {
            names: string[];
            price: number | undefined;
        } | undefined;
    };
};

//@ts-ignore
const CalculatorContext = createContext<Props>(null);

export default CalculatorContext;