import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesDeatils from "./pages/MoviesDetails";
import Bollywood from "./pages/Bollywood";
function App()
{
  return (
    <>
    <Routes>
      <Route path="/netflix_react/" element={<Home/>}/>
      <Route path="/Bollywood" element={<Bollywood/>}/>
      <Route path="/MoviesDeatils/:slug" element={<MoviesDeatils/>}/>
    </Routes>
    </>
  )
}
export default App;