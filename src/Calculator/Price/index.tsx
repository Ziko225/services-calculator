import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    discountPrice: number;
    price: number;
    isAnyRequiredService: boolean;
    findDiscountNames: () => Array<string> | undefined;
};

const Price = ({ selectedServicesId, price, discountPrice, isAnyRequiredService, findDiscountNames }: Props) => {

    if (selectedServicesId[0] && !isAnyRequiredService) {
        return (
            discountPrice
                ? <div>
                    <div>{findDiscountNames()?.map((e) => e)}</div>
                    <span className="price">Cena: <span className="price--old">{price} zł</span> {discountPrice} zł</span>
                </div>
                : <span className="price">Cena: {price || 0} zł</span>
        );
    } else {
        return null;
    }

};

export default Price;