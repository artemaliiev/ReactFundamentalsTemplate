import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  reference,
  value,
  name,
  'data-testid': dataTestId
}) => (
<label className={styles.label}>
	{labelText}
	<input
    className={styles.input}
    onChange={onChange}
    placeholder={placeholderText}
    ref={reference}
    value={value}
    name={name}
    data-testid={dataTestId}
  />
</label>
);
