import { useContext, useEffect } from "react";
import CalculatorContext from "../calculatorContext";

const useClearSelectedId = () => {
    const { getData, getSelectServices } = useContext(CalculatorContext);

    const { year, data } = getData;

    const { clearSelectedServices } = getSelectServices;

    useEffect(() => {
        clearSelectedServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, data]);
};

export default useClearSelectedId;
