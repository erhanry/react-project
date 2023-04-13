import { Link } from "react-router-dom";
import Advantages from './Advantages';

import { useBookContext } from '../../contexts/BookContext';
import { ProductItem } from "../Product/Product";

export const Home = () => {
    const { books } = useBookContext();
    return (
        <>
            <Advantages />
            <div id="hot">
                <div className="box py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="mb-0">Нови книги</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="product-slider owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                { books.slice(-5).map( x =>
                                <div  key={x._id} className="owl-item active" style={{ width: "222px" }}>
                                    <div className="item">
                                        <ProductItem {...x} />
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box text-center">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="text-uppercase">Онлайн книжарница</h3>
                        <p className="lead mb-0">При нас ще откриете голямо разнообразие от заглавия, най-новите книги и идеи за подаръци. <Link to="/books">ТУК!</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
