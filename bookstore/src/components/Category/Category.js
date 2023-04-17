import { useParams } from "react-router-dom";
import { useBookContext } from '../../contexts/BookContext';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';
import { BookItem } from "../Books/BookItem";

export const Category = () => {

    const { categoryId } = useParams();
    const { categorySelect } = useBookContext();
    const { items, params } = categorySelect(categoryId);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb params={params} />
                <Sidebar />
                <div className="col-lg-9">
                    <div className="row products">
                        {items.map(x =>
                            <div key={x._id} className="col-lg-4 col-md-6">
                                <BookItem {...x} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
