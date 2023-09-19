import React from 'react';
import { Link } from "react-router-dom";

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { EMAIL_LABEL, PASSWORD_LABEL, DEFAULT_PLACEHOLDER_TEXT, BUTTON_LOGIN_TEXT } from '../../constants'

import styles from './styles.module.css';

export const Login = () => {
	const handleSubmit = () => {

    }

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>

				<Input  labelText={EMAIL_LABEL} placeholderText={DEFAULT_PLACEHOLDER_TEXT} data-testid="emailInput" />

                <Input  labelText={PASSWORD_LABEL} placeholderText={DEFAULT_PLACEHOLDER_TEXT} data-testid="passwordInput" />

				<Button buttonText={BUTTON_LOGIN_TEXT} />
			</form>
			<p>
                If you don't have an account you may&nbsp;
				<b><Link to="/registration">register</Link></b>
			</p>
		</div>
	);
};
