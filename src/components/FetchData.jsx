import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = ({ cat }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a5b570e42d52448e880adba77a81fcf1`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=a5b570e42d52448e880adba77a81fcf1"
      );
      const filteredArticles = res.data.articles.filter(article => article.urlToImage !== null);
      setData(filteredArticles);
      setLoading(false);
    } catch (error) {
      setError("Error fetching headlines");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  const renderArticles = () => {
    return data.map((item, index) => (
      <div key={index} className=" my-3 shadow-lg p-4 w-2/3 h-1/2">
        <h6 className="my-1 font-[popins] font-bold text-xl">{item.title}</h6>
        <div className="flex justify-center items-center my-2">
          <img
            src={item.urlToImage}
            alt="news"
            className="w-full object-fill"
          />
        </div>
        <p className="my-1 text-gray-700 font-semibold">{item.description}</p>
        <p className="my-1 text-gray-600">{item.content}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View More
        </a>
      </div>
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='w-90 font-[popins]'>
      <h3 className="text-2xl font-bold my-4 flex justify-center items-center">
        <u>TOP HEADLINES</u>
      </h3>
      <div className=" flex justify-center items-center flex-col my-3 shadow-xl rounded-lg">
        {renderArticles()}
      </div>
    </div>
  );
};

export default FetchData;
