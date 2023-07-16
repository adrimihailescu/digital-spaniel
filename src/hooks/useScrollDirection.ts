/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY || scrollY - lastScrollY)
      ) {
        setScrollDirection(direction);
      }
      setIsTop(window.scrollY < 20);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const debouncedHandleScroll = debounce(updateScrollDirection, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [scrollDirection]);

  return { scrollDirection, isTop };
}
export default useScrollDirection;
