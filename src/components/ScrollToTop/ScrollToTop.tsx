import { useCallback } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.scrollToTop} onClick={handleClick}>
      ↑
    </div>
  );
};

export default ScrollToTop;
