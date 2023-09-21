import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value.toString());
        }
    }, [key, value]);

    return [value, setValue];
};
