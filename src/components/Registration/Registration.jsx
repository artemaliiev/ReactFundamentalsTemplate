import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { createUser } from '../../services';

import { NAME_LABEL, EMAIL_LABEL, PASSWORD_LABEL, DEFAULT_PLACEHOLDER_TEXT, BUTTON_LOGIN_TEXT } from '../../constants'

import styles from './styles.module.css';


export const Registration = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = React.useState(false);

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

        if (values.name && values.email && values.password) {
            setValid(true);
        }

        if (valid) {
            createServiceCall();
        }
    };

    const createServiceCall = async () => {
        try {
            await createUser(values)
                .then(data => handleServiceResponse(data));
        } catch(error) {
            console.log(error);
        }
    }

    const handleServiceResponse = (response) => {
        if (response.errors) {
            setValid(false);

            let errorStr = '';
            response.errors.forEach(error => errorStr += `<p>${error}</p>`);
            console.log(errorStr);
            setErrors(errorStr);
        }
    }

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Registration</h1>

                <Input
                    labelText={NAME_LABEL}
                    placeholderText={DEFAULT_PLACEHOLDER_TEXT}
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    data-testid="nameInput"
                />
                {submitted && !values.name && (
                    <span id="email-error">Please enter an email address</span>
                )}

                <Input
                    labelText={EMAIL_LABEL}
                    placeholderText={DEFAULT_PLACEHOLDER_TEXT}
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    data-testid="emailInput"
                />
                {submitted && !values.email && (
                    <span id="email-error">Please enter an email address</span>
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
                    <span id="email-error">Please enter an email address</span>
                )}

                {errors}

				<Button buttonText={BUTTON_LOGIN_TEXT} />
			</form>
			<p>
				If you have an account you can&nbsp;
				<b><Link to="/">log in</Link></b>
			</p>
		</div>
	);
};
