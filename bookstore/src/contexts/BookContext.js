import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { bookServiceFactory } from '../services/bookService';
import { categoryServiceFactory } from '../services/categoryService';

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
        const newBook = await bookService.create(data);

        setBooks(state => [...state, newBook]);

        navigate('/books');
    };

    const onBookEditSubmit = async (values) => {
        const result = await bookService.edit(values._id, values);

        setBooks(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deleteBook = (bookId) => {
        setBooks(state => state.filter(book => book._id !== bookId));
    };

    const getBook = (bookId) => {
        return books.find(book => book._id === bookId);
    };

    const contextValues = {
        books,
        category,
        onCreateBookSubmit,
        onBookEditSubmit,
        deleteBook,
        getBook,
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