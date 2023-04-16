import { requestFactory } from './requester';

const url = `${process.env.REACT_APP_API_URL}/data/books`;

export const bookServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const books = Object.values(result);

        return books;
    };

    const getOne = async (bookId) => {
        const result = await request.get(`${url}/${bookId}`);

        return result;
    };

    const create = async (bookData) => {
        const result = await request.post(url, bookData);
        return result;
    };

    const edit = (bookId, data) => request.put(`${url}/${bookId}`, data);

    const deleteBook = (bookId) => request.delete(`${url}/${bookId}`);

    const searchCategory = async (categoryId) => {        
        const searchQuery = encodeURIComponent(`category="${categoryId}"`);
        const result = await request.get(`${url}?where=${searchQuery}`);
       // const search = Object.values(result);
        return result;
    };

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteBook,
        searchCategory
    };
}
