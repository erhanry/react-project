import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import Breadcrumb from '../Breadcrumb/Breadcrumb';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
};

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
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
                                <label htmlFor={RegisterFormKeys.Email}>Email</label>
                                <input
                                    type="email"
                                    id={RegisterFormKeys.Email}
                                    autoComplete="true"
                                    name={RegisterFormKeys.Email}
                                    placeholder="admin@abv.bg"
                                    className="form-control"
                                    value={values[RegisterFormKeys.Email]}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={RegisterFormKeys.Password}>Password</label>
                                <input
                                    type="password"
                                    name={RegisterFormKeys.Password}
                                    id={RegisterFormKeys.Password}
                                    autoComplete="true"
                                    className="form-control"
                                    value={values[RegisterFormKeys.Password]}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={RegisterFormKeys.ConfirmPassword}>Confirm Password</label>
                                <input
                                    type="password"
                                    name={RegisterFormKeys.ConfirmPassword}
                                    id={RegisterFormKeys.ConfirmPassword}
                                    autoComplete="true"
                                    className="form-control"
                                    value={values[RegisterFormKeys.ConfirmPassword]}
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
