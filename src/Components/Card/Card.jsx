import { Link } from "react-router"

export default function Card({ cardDetails }) {
    const { title, overview, vote_average, poster_path, media_type , id } = cardDetails
    return (
        <>
            <Link to={`/movie/${id}`} className="card bg-white rounded-xl shadow-2xl p-4 group/card dark:bg-gray-700 dark:text-white">
                <div className="card-cover relative">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className="w-full rounded-xl peer" />

                    <div className="date flex flex-col group/text opacity-80  bg-yellow-300 absolute left-4 top-4 size-10 rounded-md justify-center items-center  transition-transform duration-100 group-hover/card:opacity-100">
                        <span className="text-lg font-bold dark:text-black">{vote_average.toFixed(1)}</span>
                    </div>
                </div>

                <div className="card-content space-y-3">
                    <h2 className="text-xl font-semibold mt-2 lg:mt-3">{title}</h2>

                    <p className="line-clamp-3">{overview}</p>
                </div>


            </Link>
        </>
    )
}
