import { formatNumber } from '../../utils/formatNumber';
import styles from './style.module.css';

interface ArrowsButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  current: number;
  total: number;
}

export const ArrowsButtons = ({ onNext, onPrev, current, total, isNextDisabled = false, isPrevDisabled = false }: ArrowsButtonsProps) => {
  return (
    <>
      <span className={styles.counter}>
        {formatNumber(current)}/{formatNumber(total)}
      </span>
      <div className={styles.arrows}>
        <button onClick={onPrev} disabled={isNextDisabled} className={styles.arrow}>
          <img src='./arrow.svg' alt='left arrow' />
        </button>
        <button onClick={onNext} disabled={isPrevDisabled} className={styles.arrow}>
          <img className={styles.reverseX} src='./arrow.svg' alt='right arrow' />
        </button>
      </div>
    </>
  );
};
