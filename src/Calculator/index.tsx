import SelectYear from "./SelectYear";
import SelectedServices from "./SelectedServices";
import ChooseService from "./ChooseService";
import Price from "./Price";
import "./style.css";
import useClearSelectedId from "./useClearSelectedId";

const Calculator = () => {
    useClearSelectedId();
    return (
        <div className="calculator">
            <h1>kalkulator usług telekomunikacyjnych</h1>
            <label typeof="selector">Wyberz rok:</label>
            <SelectYear />
            <ChooseService />
            <SelectedServices />
            <Price />
        </div>
    );
};

export default Calculator;