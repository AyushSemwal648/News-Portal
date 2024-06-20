import React from 'react';


const PostTile = ({ data }) => {
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="block mb-1 group bg-white overflow-hidden  hover:scale-105 hover:bg-[#000000ac] hover:text-[#fff] transition duration-300">
      <div className=" overflow-hidden flex border-b-2 border-b-slate-500 p-2 ">
        <div className="relative w-40 h-24 flex-shrink-0">
          <img
            src={data.urlToImage}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
        </div>
        <div className="px-3 flex flex-col justify-between">
          <h3 className="text-sm font-semibold line-clamp-2">
            {data.title}
          </h3>
          <p className="text-gray-600 text-xs mt-2 group-hover:text-white transition-colors duration-300">
            <span className="font-bold">{data.source.name}</span> ·{' '}
            {new Date(data.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PostTile;
