import { useEffect, useState } from "react";
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebouce = <V>(value: V, delay?: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 在value变化后都要设置一个定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // 在上一次useEffect运行完后运行的回调函数，一般负责清理
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(list: T[]) => {
  const [value, setValue] = useState(list);
  /**清空数组 */
  const clear = () => {
    setValue(new Array<T>());
  };

  /**添加一项 */
  const add = (item: T) => {
    setValue([...value, item]);
  };

  /**下标删除一项 */
  const remove = (i: number) => {
    setValue(value.filter((item, index) => index !== i));
  };
  return { remove, add, clear, value };
};
