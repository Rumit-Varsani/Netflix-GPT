import React from 'react'

const VideoTitles = ({title,overview}) => {
  return (
    <div className='py-30 px-10'>
        <h1></h1>
        <h1 className='font-extrabold text-2xl'>{title}</h1>
        <p className='w-1/3'>{overview}</p> 
        <div className='my-5 '>
            <button className='rounded bg-gray-400 w-1/12 text-2xl font-bold p-2'>▶︎ Play</button>
            <button className='rounded bg-gray-400 w-1.5/12 text-2xl font-bold p-2 mx-10'>⌽ More Info</button>
        </div>
    </div>
  )
};

export default VideoTitles;