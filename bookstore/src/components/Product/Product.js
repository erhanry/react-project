import { Link } from "react-router-dom";

export const ProductItem = ({
    _id,
    title,
    price,
    imageUrl,
    sale,
    news,
    gift,
    DetailButtons
}) => {
    return (
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front"><Link to={`/books/${_id}`}><img src={`/img/${imageUrl}`} alt={title} className="img-fluid" /></Link></div>
                    <div className="back"><Link to={`/books/${_id}`}><img src={`/img/${imageUrl}`} alt={title} className="img-fluid" /></Link></div>
                </div>
            </div>
            <Link to={`/books/${_id}`} className="invisible"><img src={`/img/${imageUrl}`} alt={title} className="img-fluid" /></Link>
            <div className="text">
                <h3><Link to={`/books/${_id}`}>{title}</Link></h3>
                <p className="price">{price.toFixed(2)} лв.</p>
                {DetailButtons && <p className="buttons"><Link to={`/books/${_id}`} className="btn btn-outline-secondary">View detail</Link></p>}
            </div>
            {sale && <RibbonSale />}
            {news && <RibbonNew />}
            {gift && <RibbonGift />}
        </div>
    );
};

export const RibbonSale = () => {
    return (
        <div className="ribbon sale">
            <div className="theribbon">SALE</div>
            <div className="ribbon-background"></div>
        </div>
    );
};

export const RibbonNew = () => {
    return (
        <div className="ribbon new">
            <div className="theribbon">NEW</div>
            <div className="ribbon-background"></div>
        </div>
    );
};

export const RibbonGift = () => {
    return (
        <div className="ribbon gift">
            <div className="theribbon">GIFT</div>
            <div className="ribbon-background"></div>
        </div>
    );
};