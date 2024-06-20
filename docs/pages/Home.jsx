import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedPostTile from "../components/FeaturedPostTile";
import PostTile from "../components/PostTile";
import CarouselComponent from "../components/CarorselComponent";
import Button from "../components/Button";

export const Home = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [SportsNews, setSportsNews] = useState([]);

  const apiKey = "a5b570e42d52448e880adba77a81fcf1";
  const baseUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";

  const fetchNews = async (category, setState) => {
    try {
      const res = await axios.get(`${baseUrl}${apiKey}&category=${category}`);
      const filteredArticles = res.data.articles.filter(
        (article) => article.urlToImage !== null
      );
      
      setState(filteredArticles);
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
    }
  };

  useEffect(() => {
    fetchNews("business", setBusinessNews);
    fetchNews("entertainment", setEntertainmentNews);
    fetchNews("technology", setTechnologyNews);
    fetchNews("Sports", setSportsNews);
  }, []);

  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto px-4 py-8 font-[popins]">
        <h2 className="text-2xl font-bold mb-4">Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {businessNews.slice(0, 3).map((article) => (
            <FeaturedPostTile key={article.url} data={article} />
          ))}
          {businessNews.slice(3, 12).map((article) => (
            <PostTile key={article.url} data={article} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Button>View All</Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Entertainment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entertainmentNews.slice(0, 3).map((article) => (
            <FeaturedPostTile key={article.url} data={article} />
          ))}
          {entertainmentNews.slice(3, 12).map((article) => (
            <PostTile key={article.url} data={article} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Button >View All</Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologyNews.slice(0, 3).map((article) => (
            <FeaturedPostTile key={article.url} data={article} />
          ))}
          {technologyNews.slice(3, 12).map((article) => (
            <PostTile key={article.url} data={article} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Button >View All</Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Sports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SportsNews.slice(0, 3).map((article) => (
            <FeaturedPostTile key={article.url} data={article} />
          ))}
          {SportsNews.slice(3, 12).map((article) => (
            <PostTile key={article.url} data={article} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Button >View All</Button>
        </div>
      </div>
    </>
  );
};
