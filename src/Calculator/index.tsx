import { useState } from "react";
import useGetData from "./hooks/useGetData";
import "./style.css";

const Calculator = () => {
    const [year, setYear] = useState<string | undefined>()
    const data = useGetData(year);

    return (
        <div className="calculator">
            <h1>kalkulator cen usług telekomunikacyjnych</h1>
            <label htmlFor="range" typeof="selector">Wyberz rok:</label>

            <select onChange={(e) => setYear(e.currentTarget.value)} className="input" name="year" id="year-select">
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
            </select>

            <div>
                <h3>Wyberz usługe</h3>
                <ul>{
                    data?.products.map((product) => {
                        return (
                            <li key={product.id}>
                                <button
                                    className="productButton"
                                    value={product.id}
                                >
                                    {product.name}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
};

export default Calculator;