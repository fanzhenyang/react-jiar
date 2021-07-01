export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key: T) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value) => (value === 0 ? false : !value);

export const debouce = (func, delay = 5000) => {
  let timeout;
  return (...rest) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...rest);
    }, delay);
  };
};
