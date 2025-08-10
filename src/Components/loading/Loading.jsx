import { useEffect } from "react";

export default function Loading() {

    const id = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, 1000)

    useEffect(() => {
        return function () {
            clearInterval(id)
        }
    }, [])

    return (
        <div className=' flex justify-center items-center h-screen bg-slate-200 dark:bg-slate-800 '>
            <span className="loader"></span>
        </div>
    )
}
