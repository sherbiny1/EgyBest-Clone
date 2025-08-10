import Card from '../../Components/Card/Card'
import { useEffect, useState } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../../Components/loading/Loading';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router';


export default function Home({ themeChange, theme }) {
    
    // key : f8fbc5327caa9c2c38d54e27c3295ae3
    
    const [popularMovies,setPopularMovies]=useState(null)
    const [queryStrings,setQueryStrings]=useSearchParams({page:1})
    const page=queryStrings.get("page")
    
    async function getPopularMovies() {
        const options = {
            url: `https://api.themoviedb.org/3/movie/popular?api_key=f8fbc5327caa9c2c38d54e27c3295ae3&page=${page}`,
            method: "GET"
        }
        const { data } = await axios.request(options)
        console.log(data);
        setPopularMovies(data.results)
    }
    useEffect(()=>{
        getPopularMovies()
    },[page])

    return (
        <>
            {popularMovies == null ? (<Loading />) : (<>
                <Navbar themeChange={themeChange} theme={theme} />
                <div className="container grid md:grid-cols-3 lg:grid-cols-5 px-28 py-8 gap-4 bg-gray-100 dark:bg-gray-800 ">
                    {popularMovies.map((movie) => <Card key={movie.id} cardDetails={movie} />)}
                </div>

                <ul className='flex justify-center gap-3 py-5'>
                    <li><Link className={ `${page === "1" ? "bg-violet-600 text-white" : "bg-gray-300 text-black hover:bg-violet-500 hover:text-white"} flex size-12 justify-center cursor-pointer rounded-md items-center`} to="?page=1">1</Link></li>
                    <li><Link className={ `${page === "2" ? "bg-violet-600 text-white" : "bg-gray-300 text-black hover:bg-violet-500 hover:text-white"} flex size-12 justify-center cursor-pointer rounded-md items-center`} to="?page=2">2</Link></li>
                    <li><Link className={ `${page === "3" ? "bg-violet-600 text-white" : "bg-gray-300 text-black hover:bg-violet-500 hover:text-white"} flex size-12 justify-center cursor-pointer rounded-md items-center`} to="?page=3">3</Link></li>
                    <li><Link className={ `${page === "4" ? "bg-violet-600 text-white" : "bg-gray-300 text-black hover:bg-violet-500 hover:text-white"} flex size-12 justify-center cursor-pointer rounded-md items-center`} to="?page=4">4</Link></li>
                    <li><Link className={ `${page === "5" ? "bg-violet-600 text-white" : "bg-gray-300 text-black hover:bg-violet-500 hover:text-white"} flex size-12 justify-center cursor-pointer rounded-md items-center`} to="?page=5">5</Link></li>
                </ul>
            </>)}

        </>
    )
}