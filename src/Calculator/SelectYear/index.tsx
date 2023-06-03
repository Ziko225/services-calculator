import { useContext } from "react";
import CalculatorContext from "../../calculatorContext";
import "./style.css";

const SelectYear = () => {
    const { getData } = useContext(CalculatorContext);

    const { setYear } = getData;

    return (
        <select onChange={(e) => setYear(e.currentTarget.value)} className="input" name="year" id="year-select">
            <option value={"2023"}>2023</option>
            <option value={"2024"}>2024</option>
            <option value={"2025"}>2025</option>
            <option value={"2026"}>2026</option>
        </select>
    );
};

export default SelectYear;