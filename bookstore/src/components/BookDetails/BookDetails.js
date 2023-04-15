import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";

import { bookServiceFactory } from '../../services/bookService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { bookReducer } from '../../reducers/bookReducer';
import { useBookContext } from '../../contexts/BookContext';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Sidebar } from '../Sidebar/Sidebar';
import { BGN } from '../../utils/Utils';
import { RibbonSale, RibbonNew } from "../Books/BookItem";

export const BookDetails = () => {
    const { bookId } = useParams();
    const { userId } = useAuthContext();
    const { deleteBook } = useBookContext();
    const [book, dispatch] = useReducer(bookReducer, {});
    const bookService = useService(bookServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            bookService.getOne(bookId),
        ]).then(([bookData]) => {
            const bookState = {
                ...bookData
            };

            dispatch({ type: 'BOOK_FETCH', payload: bookState })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookId]);

    const isOwner = book._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${book.title}`);

        if (result) {
            await bookService.delete(book._id);

            deleteBook(book._id);

            navigate('/books');
        }
    };

    if (book.imageUrl === "") { book.imageUrl = "image-not-found.svg"; }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb params="Детайл" />
                <Sidebar />
                <div className="col-lg-9 order-1 order-lg-2">
                    <div id="productMain" className="row">
                        <div className="col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front">
                                            <Link to={`/books/${book._id}`}>
                                                <img src={`/img/${book.imageUrl}`} alt={book.title} className="img-fluid" />
                                            </Link>
                                        </div>
                                        <div className="back">
                                            <Link to={`/books/${book._id}`}>
                                                <img src={`/img/${book.imageUrl}`} alt={book.title} className="img-fluid" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/books/${book._id}`} className="invisible">
                                    <img src={`/img/${book.imageUrl}`} alt={book.title} className="img-fluid" />
                                </Link>
                                <div className="text">
                                    <h3>{book.title}</h3>
                                    <p className="price">{BGN(book.price)}</p>
                                </div>
                                {book.sale && <RibbonSale />}
                                {book.news && <RibbonNew />}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h4>Автор</h4><p>{book.author}</p><hr />
                                <h4>Издателство</h4><p>{book.publisher}</p><hr />
                                <h4>Година на издаване</h4><p>{book.issuedYear}</p><hr />
                                <h4>Език</h4><p>{book.language}</p><hr />
                                <blockquote><p><em>{book.description}</em></p></blockquote><hr />
                                {isOwner &&
                                    <p className="text-center buttons">
                                        <Link to={`/books/${book._id}/edit`} className="btn btn-primary"><i className="fa fa-edit"></i> Edit</Link>
                                        <button className="btn btn-outline-danger" onClick={onDeleteClick}><i className="fa fa-trash"></i> Delete</button>
                                    </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


