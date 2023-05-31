import { Data } from "../hooks/useGetData";
import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    data: Data;
    addService: (e: number) => void;
    removeService: (e: number) => void;
    clearSelectedServices: () => void;
};

const SelectedServices = ({ selectedServicesId, data, addService, removeService, clearSelectedServices }: Props) => {
    const findServiceNameByid = (id: number) => {
        return data?.products.filter((e) => e.id === id).map((e) => e.name);
    };

    const servicesWithIncudeId = (id: number) => {
        return data?.products.filter((e) => e.includeId && e.id === id) || [];
    };

    if (selectedServicesId[0]) {
        return (
            <>
                <h2 className="calculator__subtitile">Wybrano:</h2>
                <ul className="calculator__list">{
                    selectedServicesId.map((productId, index) => (
                        <li key={productId}>
                            <button className="list__button" onClick={() => removeService(index)}>
                                {findServiceNameByid(productId)}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul>
                    <ul>{
                        selectedServicesId.map((productId) => (
                            servicesWithIncudeId(productId).map((e) =>
                                !selectedServicesId.includes(e.includeId!) &&
                                <li className="offered" key={e.id}>
                                    <span>
                                        Do usługi: <strong >{e.name}</strong> polecamy usługe: <strong>{findServiceNameByid(e.includeId!)}</strong>
                                    </span>
                                    <button onClick={() => addService(e.includeId!)} className="services__button">+</button>
                                </li>
                            )
                        ))}
                    </ul>
                </ul>
                <button className="resetButton" onClick={() => clearSelectedServices()}>Wyczyść wszystko</button>
            </>
        );
    } else {
        return null;
    }
};

export default SelectedServices;