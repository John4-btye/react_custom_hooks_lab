import { useEffect, useRef, useState } from "react";

function useLocalStorage(key, initialValue = null) {

  const isFirstRender = useRef(true);

  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    // Treat empty string as no value when initialValue is null
    if (storedValue === "" && initialValue === null) {
      return null;
    }

    if (storedValue !== null) {
      return storedValue;
    }

    return initialValue;
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (state === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [state, setState];
}

export { useLocalStorage };