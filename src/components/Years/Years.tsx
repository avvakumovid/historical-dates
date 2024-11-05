import styles from './style.module.css';
import { getStyleProp } from '../../utils/getStyleProp';

interface YearsProps {
  start: number;
  end: number;
}

export const Years = ({ start, end }: YearsProps) => {
  return (
    <div className={styles.years}>
      <span className={styles.start} style={getStyleProp('--start', start)}></span>
      <span className={styles.end} style={getStyleProp('--end', end)}></span>
    </div>
  );
};
