import React, {useState} from 'react'
import axios from 'axios'

const Search = () => {
    const [imgKeyword, setImgKeyword] = useState()
    const [imgData, setImgData] = useState()

    const handleSearchImage = async () => {
        try {
            const response = await axios
                .get("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "I3hH3f6VcBRucuYGlW96rdJwCBbka64R",
                    q: imgKeyword,
                    limit: 12
                }
            })
            setImgData(response.data.data)
            console.log(imgData)
        }
        catch(e) {
            console.error(e)
        }
    }

    return (
        <div className="flex justify-between mb-8">
            <input 
                type="text" placeholder="Seach GIF"
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
    )
}

export default Search
