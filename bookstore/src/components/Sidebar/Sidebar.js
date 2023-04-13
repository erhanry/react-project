import { useBookContext } from '../../contexts/BookContext';

export const Sidebar = () => {
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
                                {category.map(x =>
                                    <li key={x._id}><a href={`/category/${x._id}`}>{x.title}</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
