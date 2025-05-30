import { Link } from "react-router-dom";
function Moviescard({img,genre,slug})
{
    return (
        <>
        <Link to={`/MoviesDeatils/${slug}`}>
        <div className="">
            <img className="w-40 h-56 rounded-xl object-cover" src={img} >
            </img>
            <p>{genre}</p>
        </div>
        </Link>
        </>
    )
}
export default Moviescard;