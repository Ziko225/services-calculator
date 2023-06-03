import { useContext } from "react";
import CalculatorContext from "../../calculatorContext";

const ChooseService = () => {
    const { getSelectServices, getData } = useContext(CalculatorContext);

    const { selectedServicesId, addServices } = getSelectServices;

    const { data } = getData;

    const unselectedServices = data?.services.filter((e) => !selectedServicesId.includes(e.id));

    if (data) {
        return (
            <>
                <h2 className="calculator__subtitile">Wyberz usługe:</h2>
                <ul className="calculator__list">
                    {
                        unselectedServices?.map((services) => (
                            <li key={services.id}>
                                <button onClick={() => addServices([services.id])}
                                    className="list__button"
                                    value={services.id}
                                >
                                    {services.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    } else {
        return null;
    }
};

export default ChooseService;