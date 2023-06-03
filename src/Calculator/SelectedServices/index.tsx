import { useContext, useEffect } from "react";
import CalculatorContext from "../../calculatorContext";
import useFindRequired from "./useFindRequired";
import "./style.css";

const SelectedServices = () => {
    const { getSelectServices, getData } = useContext(CalculatorContext);
    const { addServices, removeService, clearSelectedServices, setIsAnyRequiredService, selectedServicesId } = getSelectServices;
    const { data } = getData;

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
                    {requiredServices.map((requiredService) => (
                        <li className="offered" key={requiredService.id}>
                            <span className="offered__text">Usługa: <strong >{requiredService.name}</strong> wymaga usługi:</span>
                            <strong>{requiredService.requiredId?.map((id) => <span key={id} className="offered__require">{findServiceNameByid(id)}</span>)}</strong>
                            <button onClick={() => addServices(requiredService.requiredId!)} className="services__button">+</button>
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