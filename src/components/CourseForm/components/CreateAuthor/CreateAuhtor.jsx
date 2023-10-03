import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createAuthorThunk } from './../../../../store/thunks/authorsThunk';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

export const CreateAuthor = ({onCreateAuthor}) => {
	const dispatch = useDispatch();

    const [authorName, setAuthorName] = useState('');

    const handleChange = e => {
        setAuthorName(e.target.value);
    };

    const handleCreate = e => {
        e.preventDefault();
        dispatch(createAuthorThunk({
            name: authorName,
        }));
    };

    return (
        <div>
            <h2>Add author</h2>
            <Input
                value={authorName}
                onChange={handleChange}
                data-testid="createAuthorInput"
            />
            <Button
                handleClick={handleCreate}
                data-testid="createAuthorButton"
                buttonText="create author"
            />
        </div>
    );
};
