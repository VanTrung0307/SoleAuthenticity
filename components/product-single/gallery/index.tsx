import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

type GalleryProductType = {
  images: string[];
};

const Gallery = ({ images }: GalleryProductType) => {
  /* Define a function that toggles the visibility of the image */

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map((image) => (
          <div key={image} className="product-gallery__thumb">
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <Swiper navigation effect="slide" className="swiper-wrapper" style={{width: '500px', backgroundRepeat: 'repeat'}}>
        <SwiperSlide>
          <div className="product-gallery__image">
            <img src="/images/products/product-1_4.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-gallery__image">
            <img src="/images/products/product-1_1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-gallery__image">
            <img src="/images/products/product-1_2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-gallery__image">
            <img src="/images/products/product-1_3.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-gallery__image">
            <img src="/images/products/product-1_5.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
