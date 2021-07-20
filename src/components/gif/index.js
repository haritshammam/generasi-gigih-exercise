import React from 'react'

const Gif = ({url, title}) => {
    return (
        <div>
            <h2 className="text-xl text-gray-700 font-bold mb-4">{title}</h2>
            <img 
                src={url} alt={title} 
                className="w-full rounded-xl mb-10"
            />
        </div>
    )
}

export default Gif
