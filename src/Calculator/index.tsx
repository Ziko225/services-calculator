import { useState, useEffect } from "react";
import useGetData from "./hooks/useGetData";
import useSelectedServices from "./hooks/useSelectedServices";
import SelectYear from "./SelectYear";
import SelectedServices from "./SelectedServices";
import ChooseService from "./ChooseService";
import useCount from "./hooks/useCount";
import "./style.css";

const Calculator = () => {
    const { selectedServices, addService, removeService, clearSelectedServices } = useSelectedServices();
    const [year, setYear] = useState<string | undefined>();
    const data = useGetData(year);
    const count = useCount(data, selectedServices);

    useEffect(() => {
        !data && clearSelectedServices();
    }, [year, data]);

    return (
        <div className="calculator">
            <h1>kalkulator usług telekomunikacyjnych</h1>
            <label htmlFor="range" typeof="selector">Wyberz rok:</label>
            <SelectYear onChange={setYear} />
            <ChooseService data={data} selectedServices={selectedServices} addService={addService} />
            <SelectedServices
                selectedServices={selectedServices}
                data={data}
                removeService={removeService}
                clearSelectedServices={clearSelectedServices}
            />
            <div>
                <h2>{count()} zł</h2>
            </div>
        </div>
    );
};

export default Calculator;