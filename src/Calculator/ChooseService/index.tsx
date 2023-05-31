import { Data } from "../hooks/useGetData";

type Props = {
    data: Data;
    selectedServices: Array<number>;
    addService: (id: number) => void;
};

const ChooseService = ({ data, selectedServices, addService }: Props) => {
    const unselectedServices = data?.products.filter((e) => !selectedServices.includes(e.id));

    if (data) {
        return (
            <>
                <h2 className="calculator__subtitile">Wyberz usługe:</h2>
                <ul className="calculator__list">
                    {
                        unselectedServices?.map((product) => (
                            <li key={product.id}>
                                <button onClick={() => addService(product.id)}
                                    className="list__button"
                                    value={product.id}
                                >
                                    {product.name}
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