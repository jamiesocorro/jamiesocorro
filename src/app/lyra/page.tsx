
import TikTokPlayer from "../components/TiktokPlayer";
import YouTubePlayer from "../components/YoutubePlayer";


export default function Lyra() {
    return (
        <div >
            <div className="flex items-center flex-col p-2 bg-black text-white">
                <div className="font-bold text-5xl text-center m-2.5">Lyra</div>
                <div className="font-bold text-l text-center m-5">200k+ followers on SocMed</div>
            </div>
            <div className="m-5">



                <div className="grid grid-cols-1 sm:grid-cols-2 items-center mb-10">
                    <div className={`bg-cover relative bg-center rounded-lg w-[390px] h-[350px] mx-auto`} style={{ backgroundImage: `url('https://jamiesocorro.github.io/bookone/images/Lyra.jpg')` }}>

                    </div>
                    <div className="mt-5 bg-gray-300 text-gray p-5">Lyra Micolob started her career in the entertainment industry when she joined The Clash Season 1, a nationwide singing competition broadcast by GMA television network. She became part of the newest female quartet vocal group called “XOXO” handled by  GMA  Artist Center  and  been releasing their own singles  under GMA Music. She  was given a chance to appear in some television programs of the network like “Maria Clara at Ibarra” and “The World Between Us”. She sang some original theme songs and soundtracks for GMA teleseryes and has  been performing  in  GMA Sunday’s noontime show  called  “All Out Sundays”. She  also performs  in some of the hotels, restobars  and casinos  in the metro  and  continues performing in  various events in Manila and in  other places  in the country</div>


                </div>

                <div className="flex items-center flex-col p-2 bg-gray-900 text-white rounded-lg">
                    <ul className="font-bold text-xs sm:text-base">
                        <li>
                            🌟 Sparkle GMA Artist
                        </li>
                        <li>
                            🌟 The Clash GMA 2018 season 1 top 8
                        </li>
                        <li>
                            🌟 Part of XOXO ( GMA Network Female Vocal Group)
                        </li>
                        <li>
                            🌟 Tawag ng Tanghalan Two-Time Defending Champion 2016
                        </li>
                        <li>
                            🌟 2015 WCOPA Silver Medalist
                        </li>
                        <li>
                            🌟 Contact Me : 09668694962
                        </li>
                    </ul>


                </div>

                <div className="mt-10">
                    <div><b>Performances Youtube Videos:</b> </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2">


                        <YouTubePlayer videoId="DuXBEIZqdRw" />
                        <YouTubePlayer videoId="4yebRZFbvQc" />
                        <YouTubePlayer videoId="btSOjLV9nDc" />
                    </div>
                </div>


                <div className="mt-10">
                    <div><b>Viral Tiktok Videos:</b> </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2">


                        <TikTokPlayer videoId="7435625463940123911" />
                        <TikTokPlayer videoId="7414412816867888402" />
                        <TikTokPlayer videoId="7400740241809657089" />

                    </div>
                </div>





            </div>




        </div>
    )
}