import { Data } from "../hooks/useGetData";

type Props = {
    data: Data;
    selectedServices: Array<number>;
    addService: (id: number) => void;
};

const ChooseService = ({ data, selectedServices, addService }: Props) => {
    return (
        <div>
            <h3>Wyberz usługe</h3>
            <ul className="calculator__list">{
                data?.products.filter((e) => !selectedServices.includes(e.id)).map((product) => (
                    <li key={product.id}>
                        <button onClick={() => addService(product.id)}
                            className="productButton"
                            value={product.id}
                        >
                            {product.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChooseService;