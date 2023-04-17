import React, { useContext } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

import { AuthContext } from '../../contexts/AuthContext';

import Logo from './logo.png';
import HeaderTop from "./HeaderTop";

export function Header() {
    const { isAuthenticated, userEmail, changeToggle, toggleMenu } = useContext(AuthContext);
    const isActive = useMatch('/category/*') ? " active" : "";
    return (
        <header className="mb-5">
            <HeaderTop userEmail={userEmail} />
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="d-md-inline-block" />
                        <span className="sr-only">React Book Store homepage</span>
                    </Link>
                    <div className="navbar-buttons">
                        <button type="button" onClick={changeToggle} className="btn btn-outline-secondary navbar-toggler">
                            <i className="fa fa-align-justify"></i>
                        </button>
                    </div>
                    <div id="navigation" className={`collapse navbar-collapse text-center${toggleMenu ? ' show' : ''}`}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><NavLink to="/" className="nav-link"><i className="fa fa-home"></i> Начало</NavLink></li>
                            <li className="nav-item"><NavLink to="/books" className={`nav-link${isActive}`}><i className="fa fa-book"></i> Книги</NavLink></li>
                            {isAuthenticated &&
                                (<>
                                    <li className="nav-item"><NavLink to="/create" className="nav-link"><i className="fa fa-plus"></i> Създай</NavLink></li>
                                    <li className="nav-item"><Link to="/logout" className="nav-link"><i className="fa fa-sign-out"></i> Изход</Link></li>
                                </>)
                            }
                            {!isAuthenticated &&
                                (<>
                                    <li className="nav-item"><NavLink to="/login" className="nav-link"><i className="fa fa-sign-in"></i> Вход</NavLink></li>
                                    <li className="nav-item"><NavLink to="/register" className="nav-link"><i className="fa fa-user-md"></i> Регистрация</NavLink></li>
                                </>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};