import styles from './style.module.css';
import { HistoricalDateType } from '../../types/types';
import { formatNumber } from '../../utils/formatNumber';
import { getStyleProp } from '../../utils/getStyleProp';

interface InteractiveCircleProps {
  historicalDateTypes: HistoricalDateType[];
  current: number;
  onNext: () => void;
  onPrev: () => void;
  onPointClick: (num: number) => void;
}

export const InteractiveCircle = ({ historicalDateTypes, current, onNext, onPrev, onPointClick }: InteractiveCircleProps) => {
  return (
    <div className={styles.wrapper} style={getStyleProp('--v', -current - 1)}>
      <div className={styles.circle} style={getStyleProp('--m', historicalDateTypes.length)}>
        {historicalDateTypes.map((date, index) => (
          <a
            className={styles.point}
            key={date.id}
            style={getStyleProp('--i', index + 1)}
            onClick={() => onPointClick(index + 1)}
            data-active={index + 1 === current && 'is-active'}
          >
            <span>{index + 1}</span>
            <span className={styles.name} data-active={index + 1 === current && 'is-active'}>
              {date.name}
            </span>
          </a>
        ))}
      </div>
      <span className={styles.counter}>
        {formatNumber(current)}/{formatNumber(historicalDateTypes.length)}
      </span>
      <div className={styles.arrows}>
        <button onClick={onPrev} disabled={current === 1} className={styles.arrow}>
          <img src='./arrow.svg' alt='left arrow' />
        </button>
        <button onClick={onNext} disabled={current === historicalDateTypes.length} className={styles.arrow}>
          <img className={styles.reverseX} src='./arrow.svg' alt='right arrow' />
        </button>
      </div>
    </div>
  );
};
