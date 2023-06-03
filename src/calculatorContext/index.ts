import { createContext } from "react";
import { Data } from "../hooks/useGetData";

type GlobalState = {
    getSelectServices: {
        selectedServicesId: number[];
        addServices: (arrayWithId: number[]) => void;
        removeService: (index: number) => void;
        clearSelectedServices: () => void;
        setIsAnyRequiredService: React.Dispatch<boolean>;
        isAnyRequiredService: boolean;
    };
    getData: {
        data: Data;
        year: string;
        setYear: React.Dispatch<React.SetStateAction<string>>;
        findServiceById: (id: number) => {
            name: string;
            id: number;
            price: number;
            includeId?: number[] | undefined;
        } | undefined;
    };
    getCount: {
        price: number;
        discountPrice: number;
        findDiscountNamesAndPrice: () => {
            names: string[];
            price: number;
        } | undefined;
    };
};

//@ts-ignore
const CalculatorContext = createContext<GlobalState>(null);

export default CalculatorContext;