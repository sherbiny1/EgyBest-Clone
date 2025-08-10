import notFound from "../../assets/notfound.svg"
import Navbar from "../../Components/Navbar/Navbar"
export default function NotFound({ themeChange, theme }) {
    return (
        <>
            <Navbar themeChange={themeChange} theme={theme} />
            <div className="flex justify-center items-center w-full h-screen bg-gray-300 dark:bg-gray-500">
                <img className="w-1/4" src={notFound} alt="not found" />
            </div>
        </>
    )
}
