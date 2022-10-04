import { useState } from "react";

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);
  const handleToggle = () => {
    setValue((flag) => !flag);
  };
  return [value, handleToggle];
};
export default useToggle;
