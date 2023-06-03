import { useContext } from "react";
import CalculatorContext from "../../calculatorContext";
import "./style.css";

const Price = () => {
    const { getSelectServices, getCount } = useContext(CalculatorContext);

    const { isAnyRequiredService, selectedServicesId } = getSelectServices;

    const { findDiscountNamesAndPrice, discountPrice, price } = getCount;

    const discountNamesAndPrice = findDiscountNamesAndPrice();

    if (selectedServicesId[0] && !isAnyRequiredService) {
        return (
            discountPrice
                ? <div>
                    {discountNamesAndPrice?.names[0] && <div>
                        <span> Promocja! </span>
                        {discountNamesAndPrice?.names.map((name) => <span key={name + discountNamesAndPrice.price} className="package">{name}</span>)}
                        w cenie: <strong>{discountNamesAndPrice?.price || 0}&nbsp;zł</strong>
                    </div>}
                    <span className="price">Cena: {discountPrice}&nbsp;zł</span>
                    <span className="price price--old">{price}&nbsp;zł</span>
                </div>
                : <span className="price">Cena: {price || 0}&nbsp;zł</span>
        );
    } else {
        return null;
    }
};

export default Price;