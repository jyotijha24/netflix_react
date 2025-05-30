import Moviescard from "../Component/Moviescard";
import Movies from "../Movies";
function Bollywood()
{
     let movie=Movies.filter((data)=>{return data.whichs==="Bollywood"})
    return(
        <>
        <div className="w-[800px] flex mx-auto justify-center items-center mt-15 gap-2">
         {movie.map((data)=>{return <Moviescard img={data.img} slug={data.slug} /> })}   
        </div>
        
        </>
    )
}
export default Bollywood;