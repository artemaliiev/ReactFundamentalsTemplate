import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { createUser } from '../../services';

import { NAME_LABEL, EMAIL_LABEL, PASSWORD_LABEL, DEFAULT_PLACEHOLDER_TEXT, BUTTON_REGISTER_TEXT } from '../../constants'

import styles from './styles.module.css';


export const Registration = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
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

        if (values.name && values.email && values.password) {
            createServiceCall();
        }
    };

    const createServiceCall = async () => {
        try {
            await createUser(values)
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
            navigate("/login");
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
                    <span className="formError">Name is required.</span>
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
                    <span className="formError">Email is required.</span>
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
                    <span className="formError">Password is required.</span>
                )}

                {formErrors}

				<Button buttonText={BUTTON_REGISTER_TEXT} data-testid="registerBtn" />
			</form>
			<p>
				If you have an account you can&nbsp;
				<b><Link to="/login">login</Link></b>
			</p>
		</div>
	);
};
