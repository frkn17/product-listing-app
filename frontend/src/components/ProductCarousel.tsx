import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules'; // include Scrollbar
import type { Product } from '../definitions/product';
import ProductCard from './ProductCard';

const Carousel: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        spaceBetween={16}
        slidesOffsetAfter={0}
        breakpoints={{
          0: { slidesPerView: 1.1, centeredSlides: true },
          480: { slidesPerView: 1.3, centeredSlides: true },
          640: { slidesPerView: 1.5, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: false },
          1280: { slidesPerView: 4, centeredSlides: false },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
