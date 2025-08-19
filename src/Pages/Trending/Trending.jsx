import { NavLink, Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

export default function Trending({ themeChange, theme }) {
  return <>
  <Navbar themeChange={themeChange} theme={theme}/>
  <main className="flex justify-center items-stretch gap-3 py-10">
    <aside className=" border-gray-400/30 border-2 dark:bg-gray-700">
        <ul className="bg-gray-100 w-30 space-y-4 p-2 *:bg-gray-200 dark:bg-gray-700">
            <li><NavLink className={({isActive})=>{return `${isActive ? "bg-violet-600 dark:bg-violet-600 text-white" : ""} w-full p-2 dark:bg-gray-500`}} to="movies">Movies</NavLink></li>
            <li><NavLink className={({isActive})=>{return `${isActive ? "bg-violet-600 dark:bg-violet-600 text-white" : ""} w-full p-2 dark:bg-gray-500`}} to="popular">Popular</NavLink></li>
            <li><NavLink className={({isActive})=>{return `${isActive ? "bg-violet-600 dark:bg-violet-600 text-white" : ""} w-full p-2 dark:bg-gray-500`}} to="tv">TV</NavLink></li>
        </ul>
    </aside>
    <section className="w-100 border-gray-400/30 p-4 border-2">
        <Outlet/>
    </section>
  </main>
  </>
}
