import { Link } from "react-router-dom";
import Advantages from './Advantages';

import { useBookContext } from '../../contexts/BookContext';
import { BookItem } from "../Books/BookItem";

export const Home = () => {

    const { getTopBooks } = useBookContext();
    const TopListBooks = getTopBooks(4);

    return (
        <>
            <Advantages />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row products">
                            { TopListBooks.map(x =>
                                <div key={x._id} className="col-lg-3 col-md-4">
                                    <BookItem {...x} />
                                </div>
                            )}
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
