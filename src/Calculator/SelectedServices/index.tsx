import { Data } from "../hooks/useGetData";
import "./style.css";

type Props = {
    selectedServices: Array<number>;
    data: Data;
    removeService: (e: number) => void;
    clearSelectedServices: () => void;
};

const SelectedServices = ({ selectedServices, data, removeService, clearSelectedServices }: Props) => {
    const filteredProductsById = (productId: number) => data?.products.filter((e) => e.id === productId);

    if (selectedServices[0]) {
        return (
            <>
                <h2 className="calculator__subtitile">Wybrano:</h2>
                <ul className="calculator__list">{
                    selectedServices.map((productId, index) => (
                        <li key={productId}>
                            {filteredProductsById(productId)?.map((selectedProduct) => (
                                <button key={selectedProduct.id} className="list__button" onClick={() => removeService(index)}>
                                    {selectedProduct.name}
                                </button>
                            ))}
                        </li>
                    ))}
                </ul>
                <button className="resetButton" onClick={() => clearSelectedServices()}>Wyczyść wszystko</button>
            </>
        );
    } else {
        return null;
    }
};

export default SelectedServices;