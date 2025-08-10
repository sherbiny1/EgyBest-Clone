import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/loading/Loading";

export default function MoviesCard({ themeChange, theme }) {
    const [movieCard,setMovieCard]=useState(null)
    let {id}=useParams()
     async function getMovieDetails(){
        const options={
            method:"GET",
            url:`https://api.themoviedb.org/3/movie/${id}?api_key=f8fbc5327caa9c2c38d54e27c3295ae3`
        }
        const {data}= await axios.request(options)
        setMovieCard(data)
        console.log(data);
    }    

    useEffect(()=>{
        getMovieDetails()
    },[])    
    
  return (
    <>
        {movieCard==null ? <Loading/>: 
        <>
            <Navbar themeChange={themeChange} theme={theme}/>
            <div className="grid lg:grid-cols-12 px-40 py-5 lg:gap-8">
                <div className="movie-poster lg:col-span-4">
                    <img src={`https://image.tmdb.org/t/p/w500${movieCard.poster_path}`} alt="" />
                </div>
                <div className="movie-content lg:col-span-8 space-y-3">
                    <h2 className="font-semibold text-2xl">{movieCard.title}</h2>
                    <p>{movieCard.overview}</p>
                </div>
            </div>
        </>}
    </>
  )
}
