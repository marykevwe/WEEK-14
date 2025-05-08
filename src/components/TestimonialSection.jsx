import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer">
      <FaArrowRight className="text-gray-700 text-xl" onClick={onClick} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer">
      <FaArrowLeft className="text-gray-700 text-xl" onClick={onClick} />
    </div>
  );
};

const images = [
  '/images/testimony/IMG-20250507-WA0034.jpg',
  '/images/testimony/IMG-20250507-WA0042.jpg',
  '/images/testimony/IMG-20250507-WA0042.jpg',
  '/images/testimony/IMG-20250507-WA0034.jpg',
  '/images/testimony/IMG-20250507-WA0042.jpg',
  '/images/testimony/IMG-20250507-WA0034.jpg',
  '/images/testimony/IMG-20250507-WA0042.jpg',
  '/images/testimony/IMG-20250507-WA0034.jpg',
  '/images/testimony/IMG-20250507-WA0042.jpg',
];

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="relative bg-gray-100 py-10 px-4 md:px-10">
      <h2 className="text-center text-2xl font-bold mb-6">What Our Customers Say</h2>
      <Slider {...settings}>
      {images.map((img, index) => (
  <div key={index} className="px-2">
    <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
      <img
        src={img}
        alt={`Testimony ${index + 1}`}
        className="w-full h-full object-cover"
      />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
