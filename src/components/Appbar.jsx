import React from 'react';
import { SearchBar } from './SearchBar';

export const Appbar = () => {
  return (
    <div className='flex justify-between'>
      <div className='text-md inline-flex items-center'>YOutube Logo</div>
      <SearchBar />
      <div className='text-md inline-flex items-center'>Sign IN</div>
    </div>
  );
};
