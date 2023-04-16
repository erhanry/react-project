import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { bookServiceFactory } from '../services/bookService';
import { categoryServiceFactory } from '../services/categoryService';
import { serializedBoolean } from "../utils/Utils";

export const BookContext = createContext();

export const BookProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);

    const bookService = bookServiceFactory();
    const categoryService = categoryServiceFactory();

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        categoryService.getAll()
            .then(result => {
                setCategory(result)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCreateBookSubmit = async (data) => {
        data.sale = serializedBoolean(data.sale);
        data.news = serializedBoolean(data.news);
        const newBook = await bookService.create(data);

        setBooks(state => [...state, newBook]);

        navigate('/books');
    };

    const onBookEditSubmit = async (values) => {  
        values.sale = serializedBoolean(values.sale);
        values.news = serializedBoolean(values.news);
        const result = await bookService.edit(values._id, values);

        setBooks(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/books/${values._id}`);
    };

    const deleteBook = (bookId) => {
        setBooks(state => state.filter(book => book._id !== bookId));
    };

    const getBook = (bookId) => {
        return books.find(book => book._id === bookId);
    };

    const getTopBooks = (count) => {
        return books.slice(-count).reverse();
    };
    
    const contextValues = {
        books,
        category,
        onCreateBookSubmit,
        onBookEditSubmit,
        deleteBook,
        getBook,
        getTopBooks,
    };

    return (
        <BookContext.Provider value={contextValues}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(BookContext);

    return context;
};