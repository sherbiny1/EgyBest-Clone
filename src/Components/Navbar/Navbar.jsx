import { NavLink } from "react-router";

export default function Navbar({ themeChange, theme }) {
    return (
        <>
            <nav className="bg-gray-200 shadow px-24 py-4 dark:bg-gray-900 dark:text-white ">
                <div className="container mx-auto  flex justify-between items-center">
                    <h1><NavLink to="/" className="text-4xl font-bold text-red-600">Egy<span className="text-violet-600">Best</span></NavLink></h1>

                    <ul className="lg:flex gap-8 hidden">
                        <li><NavLink to="/home" className={({ isActive }) => {
                            return `${isActive ? "text-violet-600 before:w-full" : "before:w-0"} hover:text-violet-400 transition-colors duration-300 focus:font-semibold relative before:w-0 hover:before:w-full before:transition[width] before:duration-300 before:left-0 before:-bottom-1  before:bg-gray-700 before:h-0.5 before:absolute `
                        }}>Home</NavLink></li>
                        <li><NavLink to="/trending" className={({ isActive }) => {
                            return `${isActive ? "text-violet-600 before:w-full" : "before:w-0"} hover:text-violet-400 transition-colors duration-300 focus:font-semibold relative before:w-0 hover:before:w-full before:transition[width] before:duration-300 before:left-0 before:-bottom-1  before:bg-gray-700 before:h-0.5 before:absolute `
                        }}>Trending</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => {
                            return `${isActive ? "text-violet-600 before:w-full" : "before:w-0"} hover:text-violet-400 transition-colors duration-300 focus:font-semibold relative before:w-0 hover:before:w-full before:transition[width] before:duration-300 before:left-0 before:-bottom-1  before:bg-gray-700 before:h-0.5 before:absolute `
                        }}>Gallery</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive }) => {
                            return `${isActive ? "text-violet-600 before:w-full" : "before:w-0"} hover:text-violet-400 transition-colors duration-300 focus:font-semibold relative before:w-0 hover:before:w-full before:transition[width] before:duration-300 before:left-0 before:-bottom-1  before:bg-gray-700 before:h-0.5 before:absolute `
                        }}>Login</NavLink></li>
                        <li><NavLink to="/register" className={({ isActive }) => {
                            return `${isActive ? "text-violet-600 before:w-full" : "before:w-0"} hover:text-violet-400 transition-colors duration-300 focus:font-semibold relative before:w-0 hover:before:w-full before:transition[width] before:duration-300 before:left-0 before:-bottom-1  before:bg-gray-700 before:h-0.5 before:absolute `
                        }}>Register</NavLink></li>
                    </ul >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <button className="btn" onClick={themeChange}>
                        {theme == 'light' ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        }
                    </button>

                </div >
            </nav>
        </>
    )
}
