import "./style.css";

type Props = {
    selectedServicesId: Array<number>;
    discountPrice: number;
    price: number;
    isAnyRequiredService: boolean;
    findDiscountNamesAndPrice: () => { names: Array<string>, price: number | undefined; } | undefined;
};

const Price = ({ selectedServicesId, price, discountPrice, isAnyRequiredService, findDiscountNamesAndPrice }: Props) => {
    const discountNamesAndPrice = findDiscountNamesAndPrice();

    if (selectedServicesId[0] && !isAnyRequiredService) {
        return (
            discountPrice
                ? <div>
                    {discountNamesAndPrice?.price && <div>
                        <span> Promocja! </span>
                        {discountNamesAndPrice?.names.map((name, i) => <span key={name + i} className="package">{name}</span>)}
                        w cenie: <strong>{discountNamesAndPrice?.price}&nbsp;zł</strong>
                    </div>}
                    <span className="price">Cena: <span className="price--old">{price} zł</span> {discountPrice} zł</span>
                </div>
                : <span className="price">Cena: {price || 0}&nbsp;zł</span>
        );
    } else {
        return null;
    }

};

export default Price;