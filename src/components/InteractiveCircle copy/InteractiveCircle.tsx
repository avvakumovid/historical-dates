import styles from './style.module.css';
import { useState } from 'react';
import { HistoricalDateType } from '../../types/types';
import { formatNumber } from '../../utils/formatNumber';
import { getStyleProp } from '../../utils/getStyleProp';
import { Years } from '../Years/Years';
import { BackgroundGrid } from '../BackgroundGrid/BackgroundGrid';

interface InteractiveCircleProps {
  historicalDateTypes: HistoricalDateType[];
}

export const InteractiveCircle = ({ historicalDateTypes }: InteractiveCircleProps) => {
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    setCurrent(current + 1);
  };
  const handlePrev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className={styles.container}>
      <BackgroundGrid />
      {/* <div className={`${styles.box} ${styles.box1}`}></div>
      <div className={`${styles.box} ${styles.box2}`}></div>
      <div className={`${styles.box} ${styles.box3}`}></div>
      <div className={`${styles.box} ${styles.box4}`}></div> */}
      <h1 className={styles.heading}>Исторические даты</h1>
      <Years start={historicalDateTypes[current - 1].yearStart} end={historicalDateTypes[current - 1].yearEnd} />
      {/* <div className={styles.years}>
        <span className={styles.start} style={getStyleProp('--start', historicalDateTypes[current - 1].yearStart)}></span>
        <span className={styles.end} style={getStyleProp('--end', historicalDateTypes[current - 1].yearEnd)}></span>
      </div> */}
      <div className={styles.wrapper} style={getStyleProp('--v', -current - 1)}>
        <div className={styles.circle} style={getStyleProp('--m', historicalDateTypes.length)}>
          {historicalDateTypes.map((date, index) => (
            <a
              className={styles.point}
              key={date.id}
              style={getStyleProp('--i', index + 1)}
              onClick={() => setCurrent(index + 1)}
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
          <button onClick={handlePrev} disabled={current === 1} className={styles.arrow}>
            <img src='./arrow.svg' alt='left arrow' />
          </button>
          <button onClick={handleNext} disabled={current === historicalDateTypes.length} className={styles.arrow}>
            <img className={styles.reverseX} src='./arrow.svg' alt='right arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};
