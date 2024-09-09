import React from 'react';
import Slider from 'react-slick';
import Item from '../Item/Item';
import './ItemSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ItemSlider({ items }) {

  const favs = items.filter((item) => ((item.id%5) < 1));
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {favs.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            newPrice={item.new_price}
            oldPrice={item.old_price}
            name={item.product_name}
            categoryId={item.category_id}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ItemSlider;

