import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    discountPrice: number;
    price: number;

};

const Price = ({ selectedServicesId, price, discountPrice }: Props) => {
    if (selectedServicesId[0]) {
        return (discountPrice
            ? <span className="price">Cena: <span className="price--old">{price} zł</span> {discountPrice} zł</span>
            : <span className="price">Cena: {price || 0} zł</span>
        );
    } else {
        return null;
    }

};

export default Price;