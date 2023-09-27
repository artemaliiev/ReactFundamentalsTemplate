import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import { getUser } from './../../store/selectors';
import { useDispatch } from "react-redux";
import { removeUserData } from '../../store/slices/userSlice';

import { Logo } from './components/Logo/Logo'
import { Button } from '../../common/Button/Button'

import styles from './styles.module.css';

export const Header = ({isLoggedIn, setLoginToken}) => {
	const currentUser = useSelector(getUser);

    const dispatch = useDispatch();
	const { pathname } = useLocation();
	const isLoginOrRegistrationPage = pathname === '/login' || pathname === '/registration';

	let showName = !isLoginOrRegistrationPage && currentUser.name;

	const handleLogOut = () => {
		dispatch(removeUserData());
		setLoginToken(null);
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
					{showName && <p className={styles.userName}>{currentUser.name}</p>}
					{<HeaderButton />}
				</div>
			</div>
		</div>
	);
};
