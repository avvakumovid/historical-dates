import { HistoricalDate } from '../../types/types';
import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderProps {
  historicalDates: HistoricalDate[];
}

export const Slider = ({ historicalDates }: SliderProps) => {
  return (
    <div className={styles.wrapper}>
      <Swiper className={styles.swiper} slidesPerView={3} spaceBetween={25} grabCursor={true}>
        {historicalDates.map((date) => (
          <SwiperSlide key={date.id} className={styles.slide}>
            <span className={styles.title}>{date.year}</span>
            <span>{date.description}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
