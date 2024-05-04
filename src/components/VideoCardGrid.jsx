import React from 'react';
import { VideoCard } from './VideoCard';
import thumbnail from '../assets/thumbnail.jpeg';

export const VideoCardGrid = () => {
  const VIDEOS = [
    {
      id: 1,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 2,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 3,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 4,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 5,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 6,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 7,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 8,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 9,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 10,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 11,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
    {
      id: 12,
      title: 'Koi Si Haan Mera Koi Si | Afsana Khan',
      image: thumbnail,
      author: 'Prateek Goswami',
      misc: '46M | 13 days ago',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {VIDEOS.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          image={video.image}
          author={video.author}
          misc={video.misc}
        />
      ))}
    </div>
  );
};
