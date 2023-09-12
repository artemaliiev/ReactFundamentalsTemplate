import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  reference,
  inputName,
  'data-testid': dataTestId
}) => (
<label className={styles.label}>
	{labelText}
	<input
    className={styles.input}
    onChange={onChange}
    placeholder={placeholderText}
    ref={reference}
    name={inputName}
    data-testid={dataTestId}
  />
</label>
);
