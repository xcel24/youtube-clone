import React from 'react';
import thumbnail from '../assets/thumbnail.jpeg';

export const VideoCard = ({ title, image, author, misc }) => {
  return (
    <div>
      <div className='pb-3'>
        <img src={image} className='object-cover h-48 w-96 rounded-xl' />
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-1 '>
          <img src={image} className='rounded-full w-20 h-20' />
        </div>
        <div className='col-span-11 text-white ml-4'>
          {title}
          <div className='text-gray-500 text-base'>{author}</div>
          <div className='text-gray-500 text-base'>{misc}</div>
        </div>
      </div>
    </div>
  );
};
