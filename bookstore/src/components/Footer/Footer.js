import { memo } from 'react';
import { Link } from 'react-router-dom';

import style from './Footer.module.css';

import { Year } from '../../utils/GetDateTime';

const Footer = () => {
    return (
        <>
            <footer id={style['footer']}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Меню</h4>
                            <hr />
                            <ul className="list-unstyled">
                                <li><Link to="/">Начало</Link></li>
                                <li><Link to="/books">Всички книги</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Потребителска секция</h4>
                            <hr />
                            <ul className="list-unstyled">
                                <li><Link to="/login">Вход</Link></li>
                                <li><Link to="/register">Нова регистрация</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Къде да ни намерите</h4>
                            <hr />
                            <p><strong>Онлайн книжарница Сиела</strong><br />гр. София,<br />ул. „Поручик Христо Топракчиев“ 11,<br />1528 НПЗ Искър,<br />Книжна борса Искър, ет. 3, офис 33<br /><strong>Bulgaria</strong></p>
                            <hr className="d-block d-md-none" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Последвайте ни</h4>
                            <hr />
                            <p className={style.social}>
                                <Link to="https://www.facebook.com" className={style.facebook} target="_blank"><i className="fa fa-facebook"></i></Link>
                                <Link to="https://twitter.com" className={style.twitter} target="_blank"><i className="fa fa-twitter"></i></Link>
                                <Link to="https://www.instagram.com" className={style.instagram} target="_blank"><i className="fa fa-instagram"></i></Link>
                                <Link to="https://www.linkedin.com" className={style.linkedin} target="_blank"><i className="fa fa-linkedin"></i></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id={style.copyright}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <p className="text-center text-lg-left">© { Year } Your name goes here.</p>
                        </div>
                        <div className="col-lg-6" >
                            <p className="text-center text-lg-right">Template design by <Link to="https://bootstrapious.com/">Bootstrapious</Link>
                                <span dangerouslySetInnerHTML={{ __html: `<!-- If you want to remove this backlink, pls purchase an Attribution-free License @ https://bootstrapious.com/p/obaju-e-commerce-template. Big thanks!-->` }} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Footer);
