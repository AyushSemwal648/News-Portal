import React from 'react';

const FeaturedPostTile = ({ data }) => {
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="block group bg-white overflow-hidden mb-4 hover:scale-105 hover:bg-[#000000ac] hover:text-[#fff] transition duration-300">
      <div className="relative">
        <img
          src={data.urlToImage}
          alt={data.title}
          className="w-full h-48 sm:h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2 group-hover:text-white transition-colors duration-300">
          <span className="font-bold">{data.source.name}</span> ·{' '}
          {new Date(data.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-800 group-hover:text-white transition-colors duration-300">
          {data.description}
        </p>
      </div>
    </a>
  );
};

export default FeaturedPostTile;
