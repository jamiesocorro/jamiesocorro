// components/YouTubePlayer.js

import React from 'react';

const YouTubePlayer = ({ videoId }: any) => {
    return (
        <div className="relative  overflow-hidden w-[390px] sm:w-[380px] h-[230px] sm:w-[560px] sm:h-[315px] bg-black">
            <iframe
                className='absolute top-0 left-0 w-[390px] sm:w-[380px] h-[230px] sm:w-[560px] sm:h-[315px]'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
        </div>
    );
};

export default YouTubePlayer;
