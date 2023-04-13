import { memo } from 'react';
import { Link } from 'react-router-dom';

const Advantages = () => {
    const rows = [
        {
            title: "Добре дошли!",
            content: "Тук ще намерите каталог с огромен асортимент.",
            href: "/books",
            icon: "heart"
        },
        {
            title: "Четат Ви се книги?",
            content: "Изключително разнообразният ни каталог включва актуалните нови заглавия.",
            href: "/books",
            icon: "tags"
        },
        {
            title: "100% бърза доставка!",
            content: "Възползвайте се от удобството да направите своята поръчка по всяко време.",
            href: "/books",
            icon: "thumbs-up"
        }
    ];
    return (
        <div id="advantages">
            <div className="container">
                <div className="row mb-4">
                    {rows.map((item, index) =>
                        <div className="col-md-4" key={index}>
                            <div className="box d-flex flex-column justify-content-center mb-0 h-100">
                                <div className="icon"><i className={`fa fa-${item.icon}`}></i></div>
                                <h3><Link to={item.href}>{item.title}</Link></h3>
                                <p className="mb-0">{item.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(Advantages);
