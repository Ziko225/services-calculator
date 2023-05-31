import { useState, useEffect } from "react";
import useGetData from "./hooks/useGetData";
import useSelectedServices from "./hooks/useSelectedServices";
import SelectYear from "./SelectYear";
import SelectedServices from "./SelectedServices";
import ChooseService from "./ChooseService";
import useCount from "./hooks/useCount";
import "./style.css";
import Price from "./Price";

const Calculator = () => {
    const { selectedServicesId, addService, removeService, clearSelectedServices } = useSelectedServices();
    const [year, setYear] = useState<string>("");
    const data = useGetData(year);
    const { price, discountPrice } = useCount(data, selectedServicesId);

    useEffect(() => {
        clearSelectedServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, data]);

    return (
        <div className="calculator">
            <h1>kalkulator usług telekomunikacyjnych</h1>
            <label htmlFor="range" typeof="selector">Wyberz rok:</label>
            <SelectYear onChange={setYear} />
            <ChooseService data={data} selectedServices={selectedServicesId} addService={addService} />
            <SelectedServices
                selectedServicesId={selectedServicesId}
                data={data}
                addService={addService}
                removeService={removeService}
                clearSelectedServices={clearSelectedServices}
            />
            <Price price={price} discountPrice={discountPrice} selectedServicesId={selectedServicesId} />
        </div>
    );
};

export default Calculator;