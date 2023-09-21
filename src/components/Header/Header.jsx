import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { Logo } from './components/Logo/Logo'
import { Button } from '../../common/Button/Button'

import styles from './styles.module.css';

export const Header = ({isLoggedIn, userName, setLoginToken, setUserName}) => {
	const { pathname } = useLocation();
	const isLoginOrRegistrationPage = pathname === '/login' || pathname === '/registration';

	let showName = !isLoginOrRegistrationPage && userName;

	const handleLogOut = () => {
		setLoginToken(null);
		setUserName(null);
	};

	const HeaderButton = () => {
		if (!isLoginOrRegistrationPage && isLoggedIn) {
			return <Button handleClick={handleLogOut} buttonText="Logout" />;
		}
	};

	return (
		<div className={styles.headerWrapper}>
			<div className={styles.headerContainer}>
				<Link to="/">
					<Logo />
				</Link>

				<div className={styles.userContainer}>
					{showName && <p className={styles.userName}>{userName}</p>}
					{<HeaderButton />}
				</div>
			</div>
		</div>
	);
};
