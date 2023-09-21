import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { login } from '../../services';

import { EMAIL_LABEL, PASSWORD_LABEL, DEFAULT_PLACEHOLDER_TEXT, BUTTON_LOGIN_TEXT } from '../../constants'

import styles from './styles.module.css';

export const Login = ({setLoginToken, setUserName}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [formErrors, setFormErrors] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = e => {
        const nextFormState = {
            ...values,
            [e.target.name]: e.target.value,
        };
        setValues(nextFormState);
    };

	const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);

        if (values.email && values.password) {
            setValid(true);
        }

        if (valid) {
            createServiceCall();
        }
    };

    const createServiceCall = async () => {
        try {
            await login(values)
                .then(response => handleServiceResponse(response));
        } catch(error) {
            setValid(false);
        }
    };

    const handleServiceResponse = (response) => {
        if (response.errors) {
            setValid(false);

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
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    data-testid="emailInput"
                />
                {submitted && !values.email && (
                    <span id="email-error">Please enter email address</span>
                )}

                <Input
                    labelText={PASSWORD_LABEL}
                    placeholderText={DEFAULT_PLACEHOLDER_TEXT}
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    data-testid="passwordInput"
                />
                {submitted && !values.password && (
                    <span id="email-error">Please enter password</span>
                )}

                {formErrors}

				<Button buttonText={BUTTON_LOGIN_TEXT} />
			</form>
			<p>
                If you don't have an account you may&nbsp;
				<b><Link to="/registration">register</Link></b>
			</p>
		</div>
	);
};
