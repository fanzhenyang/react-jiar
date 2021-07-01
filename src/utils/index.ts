export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;

// export const debouce = (func: (...rest: any) => void, delay = 5000) => {
//   let timeout;
//   return (...rest) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func(...rest);
//     }, delay);
//   };
// };
