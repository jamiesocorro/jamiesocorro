// components/TikTokPlayer.js

import React from 'react';

const TikTokPlayer = ({ videoId }: any) => {
    return (
        <div className="relative  overflow-hidden w-[390px] sm:w-[380px] h-[560px] sm:w-[560px] sm:h-[560px] bg-black">
            <iframe
                className='absolute top-0 left-0 w-[390px] sm:w-[380px] h-[560px] sm:w-[560px] sm:h-[560px]'
                width="560"
                height="560"
                src={`https://www.tiktok.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TikTok video player"
            ></iframe>
        </div>
    );
};

export default TikTokPlayer;
