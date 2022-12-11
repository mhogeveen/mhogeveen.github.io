import clsx from "clsx";
import styles from "./GridLines.module.scss";

export const GridLines = () => {
  return (
    <div className={clsx(styles.grid, styles["grid-background"])}>
      <div className={styles["grid-line"]} />
      <div className={styles["grid-line"]} />
      <div className={styles["grid-line"]} />
      <div className={styles["grid-line"]} />
      <div className={styles["grid-line"]} />
      <div className={styles["grid-line"]} />
    </div>
  );
};
