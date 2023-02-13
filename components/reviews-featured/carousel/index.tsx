import ReviewItem from 'components/review-item/index'
import { ReviewTypeList } from 'types';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewca } from './../../../utils/data/reviewca';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ReviewCarouselType = {
    reviewcas: ReviewTypeList[]
}

const ReviewCarousel = ({ reviewcas }: ReviewCarouselType) => {
  if (!reviewcas) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {reviewcas.map(item => (
          <SwiperSlide key={item.id}>
            <ReviewItem
              id={item.id} 
              images={item.images}
              title={item.title}
              types={item.types}
              description={item.description} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewCarousel