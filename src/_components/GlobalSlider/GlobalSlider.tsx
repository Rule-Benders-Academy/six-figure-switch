import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styles from './GlobalSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type GlobalSliderProps = {
  children: React.ReactNode[];
};

const GlobalSlider: React.FC<GlobalSliderProps> = ({ children }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...settings}>
        {children.map((child, i) => (
          <div key={i} className={styles.slideItem}>
            {child}
          </div>
        ))}
      </Slider>

      <div className={styles.customDots}>
        {children.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalSlider;
