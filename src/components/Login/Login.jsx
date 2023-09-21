import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { login } from '../../services';

import { EMAIL_LABEL, PASSWORD_LABEL, DEFAULT_PLACEHOLDER_TEXT, BUTTON_LOGIN_TEXT } from '../../constants'

import styles from './styles.module.css';

export const Login = ({setLoginToken, setUserName}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

	const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);

        if (email && password) {
            const userData = {
                email,
                password
            };
            createServiceCall(userData);
        }
    };

    const createServiceCall = async (userData) => {

        try {
            await login(userData)
                .then(response => handleServiceResponse(response));
        } catch(error) {
            setFormErrors('Default error');
        }
    };

    const handleServiceResponse = (response) => {
        if (response.errors) {
            let errorStr = '';
            response.errors.forEach(error => errorStr += `${error} ,`);
            setFormErrors(errorStr);
        }

        if (response.successful) {
            setUserName(response.user.name);
            setLoginToken(response.result);
            navigate("/");
        }
    };

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>

				<Input
                    labelText={EMAIL_LABEL}
                    placeholderText={DEFAULT_PLACEHOLDER_TEXT}
                    value={email}
                    onChange={handleEmailChange}
                    data-testid="emailInput"
                />
                {submitted && !email && (
                    <span className="formError">Email is required.</span>
                )}

                <Input
                    labelText={PASSWORD_LABEL}
                    placeholderText={DEFAULT_PLACEHOLDER_TEXT}
                    value={password}
                    onChange={handlePasswordChange}
                    data-testid="passwordInput"
                />
                {submitted && !password && (
                    <span className="formError">Password is required.</span>
                )}

                {formErrors}

				<Button buttonText={BUTTON_LOGIN_TEXT} />
			</form>
			<p>
                If you don't have an account you can &nbsp;
				<b><Link to="/registration">register</Link></b>
			</p>
		</div>
	);
};
