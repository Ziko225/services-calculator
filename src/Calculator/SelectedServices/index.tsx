import { Data } from "../hooks/useGetData";

type Func = {
    selectedServices: Array<number>;
    data: Data;
    removeService: (e: number) => void;
    clearSelectedServices: () => void;
};

const SelectedServices = ({ selectedServices, data, removeService, clearSelectedServices }: Func) => {
    return (
        <div>
            <h3>Wybrano</h3>
            <ul className="calculator__list">{
                selectedServices.map((product, index) => (
                    <li key={product}>
                        <button className="productButton" onClick={() => removeService(index)}>
                            {data?.products.filter((e) => e.id === product).map((e) => (
                                <span key={e.name}>{e.name}</span>
                            ))}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedServices[0] && <button onClick={() => clearSelectedServices()}>Wyczyść</button>}
        </div>
    );
};

export default SelectedServices;