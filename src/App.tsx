import './App.css';
import styles from './style.module.css';
import { BackgroundGrid } from './components/BackgroundGrid/BackgroundGrid';
import { InteractiveCircle } from './components/InteractiveCircle/InteractiveCircle';
import { Years } from './components/Years/Years';
import { dateType, historicalDateList } from './types/types';
import { useState } from 'react';
import { Slider } from './components/Slider/Slider';

function App() {
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
      <h1 className={styles.heading}>Исторические даты</h1>
      <Years start={dateType[current - 1].yearStart} end={dateType[current - 1].yearEnd} />
      <div className={styles.circle}>
        <InteractiveCircle
          historicalDateTypes={dateType}
          onNext={handleNext}
          onPrev={handlePrev}
          current={current}
          onPointClick={(number) => setCurrent(number)}
        />
      </div>
      <Slider key={historicalDateList[current - 1].type.id} historicalDates={historicalDateList[current - 1].dates} />
    </div>
  );
}

export default App;

// <div>
//   {/* <InteractiveCircle  historicalDateTypes={dateType}/> */}
// </div>
