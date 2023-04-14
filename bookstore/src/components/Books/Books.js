import { useBookContext } from '../../contexts/BookContext';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Sidebar } from '../Sidebar/Sidebar';
import { BookItem } from "./BookItem";

export const Books = () => {
    const { books } = useBookContext();
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb params="Книги" />
                <Sidebar />
                <div className="col-lg-9">
                    <div className="row products">
                        {books.filter(x => x.hidden === false).map(x =>
                                <div key={x._id} className="col-lg-4 col-md-6">
                                    <BookItem {...x} {...{DetailButtons: true}} />
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}