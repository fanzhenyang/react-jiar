import { useEffect, useState } from "react";
export const useMount = (callback, ...m) => {
  useEffect(() => {
    callback();
  }, m);
};

export const useDebouce = (value, delay = 5000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 在value变化后都要设置一个定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // 在上一次useEffect运行完后运行的回调函数，一般负责清理
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
