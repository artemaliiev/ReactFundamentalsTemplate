import React, { useState } from "react";

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

export const CreateAuthor = ({onCreateAuthor}) => {
    const [authorName, setAuthorName] = useState('');

    const handleChange = e => {
        setAuthorName(e.target.value);
    };

    const handleCreate = e => {
        e.preventDefault();
        onCreateAuthor(authorName);
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
