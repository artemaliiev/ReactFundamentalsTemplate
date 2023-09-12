import React from 'react';

import { Logo } from './components/Logo/Logo'
import { Button } from '../../common/Button/Button'

import styles from './styles.module.css';

export const Header = ({isLoggedIn, isLoginOrRegistrationPage}) => {
	const BUTTON_TEXT = isLoggedIn ? 'Logout' : 'Login';

	return (
		<div className={styles.headerWrapper}>
			<div className={styles.headerContainer}>
				<Logo />

				<div className={styles.userContainer}>
					{isLoggedIn && <p className={styles.userName}>Boris</p>}
					{!isLoginOrRegistrationPage && <Button buttonText={BUTTON_TEXT} />}
				</div>
			</div>
		</div>
	);
};
