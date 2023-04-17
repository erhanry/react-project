import { Link } from "react-router-dom";

import { useBookContext } from '../../contexts/BookContext';

import { useForm } from '../../hooks/useForm';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';

export const CreateBook = () => {
    const { category, onCreateBookSubmit } = useBookContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        author: '',
        publisher: '',
        language: '',
        issuedYear: '',
        category: '',
        price: '',
        imageUrl: '',
        sale: true,
        news: true
    }, onCreateBookSubmit);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb params="Нова Книга" />
                <Sidebar />
                <div id="checkout" className="col-lg-9">
                    <div className="box">
                        <form method="post" onSubmit={onSubmit}>
                            <div className="content py-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="title">Наименование</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                name="title"
                                                value={values.title}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="author">Автор</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="author"
                                                name="author"
                                                value={values.author}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="publisher">Издателство</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="publisher"
                                                name="publisher"
                                                value={values.publisher}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="price">Цена</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="price"
                                                name="price"
                                                value={values.price}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="issuedYear">Година на издаване</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="issuedYear"
                                                name="issuedYear"
                                                placeholder="2023"
                                                value={values.issuedYear}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="category">Категория</label>
                                            <select
                                                className="form-control"
                                                id="category"
                                                name="category"
                                                value={values.category}
                                                onChange={changeHandler}
                                            >
                                                {category.map(x =>
                                                    <option key={x._id} value={x._id}>{x.title}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="language">Език</label>
                                            <select
                                                className="form-control"
                                                id="language"
                                                name="language"
                                                value={values.language}
                                                onChange={changeHandler}
                                            >
                                                <option defaultValue="Български">Български</option>
                                                <option defaultValue="Английски">Английски</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="news">Нова</label>
                                            <select
                                                className="form-control"
                                                id="news"
                                                name="news"
                                                value={values.news}
                                                onChange={changeHandler}
                                            >
                                                <option value="true">Да</option>
                                                <option value="false">Не</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="sale">Налична</label>
                                            <select
                                                className="form-control"
                                                id="sale"
                                                name="sale"
                                                value={values.sale}
                                                onChange={changeHandler}
                                            >
                                                <option value="true">Да</option>
                                                <option value="false">Не</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="imageUrl">Картина</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="imageUrl"
                                                name="imageUrl"
                                                placeholder="image.jpg"
                                                value={values.imageUrl}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                value={values.description}
                                                onChange={changeHandler}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer d-flex justify-content-between">
                                <Link to="/books" className="btn btn-outline-secondary"><i className="fa fa-chevron-left"></i> Откас</Link>
                                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i> Изпрати</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
