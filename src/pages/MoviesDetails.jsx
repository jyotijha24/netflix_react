import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Movies from "../Movies";
import Moviescard from "../Component/Moviescard";
import { useState } from "react";
import { Link } from "react-router-dom";
function MoviesDeatils()
{
    let[volume,setvolume]=useState(true);
    const MuteIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-volume-mute" viewBox="0 0 16 16">
      <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
    </svg>
  );
};
    
const UnmuteIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-volume-up fill-white" viewBox="0 0 16 16">
      <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
      <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8z"/>
      <path d="M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
    </svg>
  );
};



function volumeHandler()
    {
        setvolume((prev)=>{ return !prev});
    }
  
    let {slug}=useParams();
    console.log(slug);
    let movie=Movies.find((data)=>{return data.slug==slug});
    console.log(movie);
    let suggestion=Movies.filter((data)=>{return data.genre==movie.genre && data.title!=movie.title })
    console.log(suggestion);
    return(
    <>
    <div className="w-full relative ">
        
        <ReactPlayer url={movie.youtube_trailer} muted={volume} width="1500px" height="700px " playing={true}  />
        <div className="absolute top-[300px] left-52 w-96">
            
            
            <p className="bg-red-500 text-white  py-1 px-2 w-32 ">imdb rating {movie.imdb_rating}</p>
            <p className=" text-5xl font-bold mt-2 text-white">{movie.title}</p>
            <p className="text-white mt-3">{movie.description}</p>
            
            
            <button className="bg-white text-black rounded-lg px-4 py-2 text-sm mt-2">Add to Watchlist</button>   
            
        </div>
        <Link to="/">
        <button className="hover:cursor-pointer absolute top-24 right-24 text-white rounded-xl border-2 py-1 px-2 border-white">Go Back</button>
        </Link>
        <div className="absolute top-96 right-10">
                <button className="  border border-white rounded-full h-10 w-10 flex items-center justify-center" onClick={volumeHandler}>{volume?<UnmuteIcon />:<MuteIcon />}</button>
            </div>
    </div>
    <div className=" w-[1100px] mx-auto">
        <p className="font-bold text-white text-3xl">More Like These</p>
    
    <div className=" flex gap-2 mt-2 ">
        { suggestion.map((data)=>{return <Moviescard img={data.img} slug={data.slug} />})}
    </div>
    </div>
    </>
    )
}
export default MoviesDeatils;