import { Data } from "../hooks/useGetData";

type Props = {
    data: Data;
    selectedServices: Array<number>;
    addService: (id: number) => void;
};

const ChooseService = ({ data, selectedServices, addService }: Props) => {
    const unselectedServices = data?.services.filter((e) => !selectedServices.includes(e.id));

    if (data) {
        return (
            <>
                <h2 className="calculator__subtitile">Wyberz usługe:</h2>
                <ul className="calculator__list">
                    {
                        unselectedServices?.map((services) => (
                            <li key={services.id}>
                                <button onClick={() => addService(services.id)}
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