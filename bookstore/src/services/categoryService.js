import { requestFactory } from './requester';

const baseUrl = `${process.env.REACT_APP_API_URL}/data/category`;
const request = requestFactory();

export const categoryServiceFactory = () => {
    const getAll = async () => {
        const result = await request.get(baseUrl);
        const category = Object.values(result);

        return category;
    };
    return { getAll };
}
