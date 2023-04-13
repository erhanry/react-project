import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import Breadcrumb from '../Breadcrumb/Breadcrumb';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb params="Нова регистрация" />
                <div className="col-md-6 mx-auto">
                    <div className="box">
                        <h1>Нова регистрация</h1>
                        <p className="lead">Регистрацията Ви дава безброй предимства.</p>
                        <p className="text-muted">Aко вече сте регистриран потребител, <Link to="/login">Вход</Link> към вашия профил!</p>
                        <hr />
                        <form method="post" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="true"
                                    name="email"
                                    placeholder="admin@abv.bg"
                                    className="form-control"
                                    value={values.email}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="true"
                                    id="register-password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    autoComplete="true"
                                    className="form-control"
                                    value={values.confirmPassword}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-user-md"></i> Регистрация</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
