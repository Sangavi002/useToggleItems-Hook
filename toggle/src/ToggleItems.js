import { useState } from "react";

const useToggleItems = (initialValue, initialPosition = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  const state = initialValue[currentIndex];

  return [state, toggleState];
};

export default useToggleItems;
