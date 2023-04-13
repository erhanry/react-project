import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from '../../contexts/AuthContext';

import Logo from './logo.png';
import HeaderTop from "./HeaderTop";

export function Header() {
    const { isAuthenticated, userEmail, changeToggle, toggleMenu } = useContext(AuthContext);

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
                            <li className="nav-item"><NavLink to="/" className="nav-link">Начало</NavLink></li>
                            <li className="nav-item"><NavLink to="/books" className="nav-link">Книги</NavLink></li>
                            {isAuthenticated && <li className="nav-item"><Link to="/logout" className="nav-link">Изход</Link></li>}
                            {!isAuthenticated &&
                                <>
                                    <li className="nav-item"><NavLink to="/login" className="nav-link">Вход</NavLink></li>
                                    <li className="nav-item"><NavLink to="/register" className="nav-link">Регистрация</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};