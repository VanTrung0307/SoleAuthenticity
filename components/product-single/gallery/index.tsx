import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation } from "swiper";

SwiperCore.use([Scrollbar, Navigation]);

type GalleryProductType = {
  images: string[];
};

const Gallery = ({ images }: GalleryProductType) => {
  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map((image) => (
          <div key={image} className="product-gallery__thumb">
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <Swiper
        effect="slide"
        className="swiper-wrapper"
        style={{
          width: "500px",
          height: "500px",
          maxHeight: "500px",
          maxWidth: "500px",
        }}
      >
        {images.map((image) => (
          <SwiperSlide style={{ maxHeight: "500px", maxWidth: "500px" }}>
            <div key={image}>
              <img
                src={image}
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
