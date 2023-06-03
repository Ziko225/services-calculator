import { useState, useEffect } from "react";
import useGetData from "./hooks/useGetData";
import useSelectServices from "./hooks/useSelectedServices";
import SelectYear from "./SelectYear";
import SelectedServices from "./SelectedServices";
import ChooseService from "./ChooseService";
import useCount from "./hooks/useCount";
import Price from "./Price";
import "./style.css";


const Calculator = () => {
    const { selectedServicesId, addServices, removeService, clearSelectedServices } = useSelectServices();
    const [isAnyRequiredService, setIsAnyRequiredService] = useState(false);
    const [year, setYear] = useState<string>("2023");
    const data = useGetData(year);
    const { price, discountPrice, findDiscountNamesAndPrice } = useCount(data, selectedServicesId);

    useEffect(() => {
        clearSelectedServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, data]);

    return (
        <div className="calculator">
            <h1>kalkulator usług telekomunikacyjnych</h1>
            <label typeof="selector">Wyberz rok:</label>
            <SelectYear onChange={setYear} />
            <ChooseService data={data} selectedServices={selectedServicesId} addServices={addServices} />
            <SelectedServices
                setIsAnyRequiredService={setIsAnyRequiredService}
                selectedServicesId={selectedServicesId}
                data={data}
                addServices={addServices}
                removeService={removeService}
                clearSelectedServices={clearSelectedServices}
            />
            <Price
                price={price}
                discountPrice={discountPrice}
                selectedServicesId={selectedServicesId}
                isAnyRequiredService={isAnyRequiredService}
                findDiscountNamesAndPrice={findDiscountNamesAndPrice} />
        </div>
    );
};

export default Calculator;