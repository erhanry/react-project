import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useBookContext } from "../../contexts/BookContext";

export const BookOwner = ({
    children,
}) => {
    const { bookId } = useParams();
    const { getBook } = useBookContext();
    const { userId } = useAuthContext();

    const currentBook = getBook(bookId);

    if (currentBook && currentBook._ownerId !== userId) {
        return <Navigate to={`/books/${bookId}`} replace />
    }

    return children ? children : <Outlet />
};