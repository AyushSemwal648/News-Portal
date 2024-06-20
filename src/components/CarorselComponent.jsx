import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [data, setData] = useState([]);

  const headLine = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a5b570e42d52448e880adba77a81fcf1");
      // Filter out articles with null urlToImage
      const filteredArticles = res.data.articles.filter(article => article.urlToImage !== null);
      setData(filteredArticles);
    } catch (error) {
      console.error("Error fetching headlines:", error);
    }
  };

  useEffect(() => {
    headLine();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="m-auto w-[96vw] font-[popins]">
      <div className="mt-20">
        {data.length > 0 ? (
          <Slider {...settings}>
            {data.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                target='_blank' 
                rel="noopener noreferrer" 
                className='block hover:scale-105 hover:bg-[#000000ac] hover:text-[#fff] transition duration-300'
              >
                <div className=" h-[350px]  pt-4">
                  <div className="h-56 flex justify-center">
                    <img src={item.urlToImage} alt={item.title} className="h-full w-full object-cover px-2" />
                  </div>
                  <div className="flex flex-col justify-start">
                    <p className="text-gray-500 text-sm px-2">{new Date(item.publishedAt).toDateString()}</p>
                    <p className="text-sm font-bold px-2">{item.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
