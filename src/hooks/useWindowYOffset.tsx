import { useEffect, useState } from "react";

export const useWindowYOffset = () => {
  const [yOffset, setYOffset] = useState(window.scrollY);
  const setYScreenOffset = () => {
    setYOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", setYScreenOffset);

    return () => {
      window.removeEventListener("scroll", setYScreenOffset);
    };
  }, [yOffset]);
  return yOffset;
};
