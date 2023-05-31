import { Data } from "../hooks/useGetData";
import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    data: Data;
    removeService: (e: number) => void;
    clearSelectedServices: () => void;
};

const SelectedServices = ({ selectedServicesId, data, removeService, clearSelectedServices }: Props) => {
    const findServiceNameByid = (id: number) => data?.products.filter((e) => e.id === id).map((e) => e.name);

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
                            data?.products.filter((e) => e.includeId && e.id === productId).map((e) =>

                                <li className="offered" key={e.id}>
                                    Do usługi <strong >{e.name}</strong> polecamy usługe: {e.includeId?.map((e) =>
                                        <>
                                            <strong className="offered--services" key={e}>{findServiceNameByid(e)}</strong>
                                            <button className="offered__button">+</button>
                                        </>
                                    )}
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