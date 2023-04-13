import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { categoryServiceFactory } from '../services/categoryService';

export const CategoryContext = createContext();

export const CategoryProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);
    const categoryService = categoryServiceFactory();

    useEffect(() => {
        categoryService.getAll()
            .then(result => {
                setCategory(result)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCreateCategorySubmit = async (data) => {
        const newGame = await categoryService.create(data);

        setCategory(state => [...state, newGame]);

        navigate('/books');
    };

    const onCategoryEditSubmit = async (values) => {
        const result = await categoryService.edit(values._id, values);

        setCategory(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deleteCategory = (categoryId) => {
        setCategory(state => state.filter(category => category._id !== categoryId));
    };

    const getCategory = (categoryId) => {
        return category.find(category => category._id === categoryId);
    };

    const contextValues = {
        category,
        onCreateCategorySubmit,
        onCategoryEditSubmit,
        deleteCategory,
        getCategory,
    };

    return (
        <CategoryContext.Provider value={contextValues}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(CategoryContext);

    return context;
};