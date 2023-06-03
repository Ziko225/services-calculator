import { useEffect } from "react";
import { Data } from "../hooks/useGetData";
import useFindRequired from "./useFindRequired";
import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    data: Data;
    addServices: (arrayWithId: Array<number>) => void;
    removeService: (arrayWithId: number) => void;
    clearSelectedServices: () => void;
    setIsAnyRequiredService: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectedServices = ({ selectedServicesId, data, addServices, removeService, clearSelectedServices, setIsAnyRequiredService }: Props) => {
    const { findServiceNameByid, requiredServices } = useFindRequired(data, selectedServicesId);

    useEffect(() => {
        requiredServices[0] ? setIsAnyRequiredService(true) : setIsAnyRequiredService(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requiredServices]);

    if (selectedServicesId[0]) {
        return (
            <>
                <h2 className="calculator__subtitile">Wybrano:</h2>
                <ul className="calculator__list">{
                    selectedServicesId.map((serviceId, index) => findServiceNameByid(serviceId)![0] &&
                        <li key={serviceId}>
                            <button className="list__button" onClick={() => removeService(index)}>
                                {findServiceNameByid(serviceId)}
                            </button>
                        </li>
                    )}
                </ul>
                <button className="resetButton" onClick={() => clearSelectedServices()}>Wyczyść wszystko</button>
                <ul>
                    {requiredServices.map((e) => (
                        <li className="offered" key={e.id}>
                            <span className="offered__text">Usługa: <strong >{e.name}</strong> wymaga usługi:</span>
                            <strong>{e.includeId?.map((e) => <span key={e} className="offered__require">{findServiceNameByid(e)}</span>)}</strong>
                            <button onClick={() => addServices(e.includeId!)} className="services__button">+</button>
                        </li>
                    ))}
                </ul>
            </>
        );
    } else {
        return null;
    }
};

export default SelectedServices;