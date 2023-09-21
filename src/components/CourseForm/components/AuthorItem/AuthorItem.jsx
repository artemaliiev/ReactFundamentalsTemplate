import React from 'react';

import { Button } from '../../../../common/Button/Button';

import styles from './styles.module.css';

export const AuthorItem = ({author, handleAddAuthor}) => (
	<div className={styles.authorItem} data-testid='authorItem'>
		<span>{author.name}</span>
        <Button handleClick={(e)=>handleAddAuthor(e, author)} buttonText='Add author' data-testid="addAuthor"/>
	</div>
);
