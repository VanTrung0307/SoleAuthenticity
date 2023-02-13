
import useSwr from 'swr';
import React from 'react';
import ReviewsCarousel from './carousel';

const ReviewsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/reviewcas', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Reviews</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ReviewsCarousel reviewcas={data} />
      </div>
    </section>
  )
};

export default ReviewsFeatured