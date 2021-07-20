// import Search from './components/form';
import Gif from './components/gif';
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [imgKeyword, setImgKeyword] = useState();
  const [imgData, setImgData] = useState();

  const handleSearchImage = async () => {
    await axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: imgKeyword,
          limit: 12,
        },
      })
      .then((response) => {
        setImgData(response.data.data);
        console.log(imgData)
      });
  };

  return (
    <div className="pt-12 flex justify-center">
      <div className="flex justify-between mb-8">
        <input
          type="text"
          placeholder="Seach GIF"
          className="bg-gray-200 px-4 py-2 w-full mr-2 rounded-xl"
          onChange={(e) => setImgKeyword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={handleSearchImage}
        >
          Search
        </button>
      </div>
      <div className="bg-white px-5 py-5 rounded-xl shadow-lg">
        {/* <Search/> */}

        {imgData && imgData.map((gif) => {
          return (
            
            <Gif key={gif.id} url={gif.images.original.url} title={gif.title}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
