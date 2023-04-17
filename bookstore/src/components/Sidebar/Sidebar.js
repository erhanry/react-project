import { memo } from 'react';
import { Link } from "react-router-dom";
import { useBookContext } from '../../contexts/BookContext';

const Sidebar = () => {
    const { category } = useBookContext();
    return (
        <div className="col-lg-3">
            <div className="card sidebar-menu mb-4">
                <div className="card-header">
                    <h3 className="h4 card-title">Категории</h3>
                </div>
                <div className="card-body">
                    <ul className="nav nav-pills flex-column category-menu">
                        <li>
                            <ul className="list-unstyled">
                                <li><Link to="/books">Всички книги</Link></li>
                                {category.map(x =>
                                    <li key={x._id}><Link to={`/category/${x._id}`}>{x.title}</Link></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(Sidebar);
