import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { saveAuthor } from '../../../../store/slices/authorsSlice';

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
        // onCreateAuthor(authorName);
        dispatch(
            saveAuthor({
                name: authorName,
                id: (Math.random()*1000).toString()
            })
        );
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
