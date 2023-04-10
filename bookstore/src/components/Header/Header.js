import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from './logo.png';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="header mb-5">
            <div id="top">
                <div className="container">
                    <div className="row">
                        <div className="col text-center text-lg-right">Потребител: admin@abv.bg</div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand home">
                        <img src={Logo} alt="Obaju logo" className="d-none d-md-inline-block" />
                        <img src={Logo} alt="Obaju logo" className="d-inline-block d-md-none" />
                        <span className="sr-only">Obaju - go to homepage</span>
                    </Link>
                    <div className="navbar-buttons">
                        <button type="button" onClick={toggleMenu} className="btn btn-outline-secondary navbar-toggler">
                            <i className="fa fa-align-justify"></i>
                        </button>
                    </div>
                    <div id="navigation" className={`collapse navbar-collapse text-center${openMenu ? ' show' : ''}`}>
                        <ul className="navbar-nav mr-auto" onClick={toggleMenu}>
                            <li className="nav-item"><NavLink to="/" className="nav-link">Начало</NavLink></li>
                            <li className="nav-item"><NavLink to="/books" className="nav-link">Книги</NavLink></li>
                            <li className="nav-item"><NavLink to="/login" className="nav-link">Вход</NavLink></li>
                            <li className="nav-item"><NavLink to="/register" className="nav-link">Регистрация</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};