import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import Breadcrumb from '../Breadcrumb/Breadcrumb';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <>
            <Breadcrumb params="Вход" />
            <div className="col-md-6 mx-auto">
                <div className="box">
                    <h1>Вход</h1>
                    <p className="lead">Ако имате профил, използвайте имейла си за да влезете.</p>
                    <p className="text-center text-muted"><Link to="/register"><strong>Регистрирай се сега</strong></Link>!</p>
                    <hr />
                    <form method="POST" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="admin@abv.bg"
                                autoComplete="true"
                                name={LoginFormKeys.Email}
                                value={values[LoginFormKeys.Email]}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                className="form-control"
                                autoComplete="true"
                                name={LoginFormKeys.Password}
                                value={values[LoginFormKeys.Password]}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in"></i>Вход</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};