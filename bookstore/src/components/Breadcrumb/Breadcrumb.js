import { memo } from 'react';
import { Link } from "react-router-dom";
import './Breadcrumb.css'

const Breadcrumb = ({ params }) => {
    return (
        <div className="col-lg-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li aria-current="page" className="breadcrumb-item active">{params}</li>
                </ol>
            </nav>
        </div>
    );
};
export default memo(Breadcrumb);
