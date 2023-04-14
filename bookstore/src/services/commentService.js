import { requestFactory } from './requester';

const baseUrl = `${process.env.REACT_APP_API_URL}/data/comments`;
const request = requestFactory();

export const getAll = async (bookId) => {
    const searchQuery = encodeURIComponent(`bookId="${bookId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (bookId, comment) => {
    const result = await request.post(baseUrl, { bookId, comment });

    return result;
};