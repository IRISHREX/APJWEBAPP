import { useState } from "react";

function useHideOnClick(initialState = false) {
  const [isHidden, setIsHidden] = useState(initialState);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return { isHidden, handleClick };
}

export default useHideOnClick;
