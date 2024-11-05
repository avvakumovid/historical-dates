import styles from './style.module.css';

export const BackgroundGrid = () => {
  return (
    <div>
      <div className={`${styles.cell} ${styles.cellTopLeft}`}></div>
      <div className={`${styles.cell} ${styles.cellTopRight}`}></div>
      <div className={`${styles.cell} ${styles.cellBottomLeft}`}></div>
      <div className={`${styles.cell} ${styles.cellBottomRight}`}></div>
    </div>
  );
};
