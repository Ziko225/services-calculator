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