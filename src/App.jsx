import { useState } from "react";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Trending from "./Pages/Trending/Trending";
import MoviesCard from "./Pages/MoviesCard/MoviesCard";

export default function App() {


  function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("token"); // Check login status

  if (!isLoggedIn) {
    return <Navigate to="/register" replace />;
  }

  return children;
}

  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')
  function themeChange() {
    if (theme == "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

  const routes = createBrowserRouter([
    {
      index: true,
      element: <Navigate to={"/home"} />,
    },
    {
      path: "/register",
      element: <SignUp themeChange={themeChange} theme={theme} />
    },
    {
      path: "/login",
      element: <Login themeChange={themeChange} theme={theme} />
    },
    {
      path:"/movie/:id",
      element: (
        <ProtectedRoute>
          <MoviesCard themeChange={themeChange} theme={theme} />
        </ProtectedRoute>
      ), 
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home themeChange={themeChange} theme={theme} />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound themeChange={themeChange} theme={theme} />
    },
    {
      path:"/trending",
      element: (
        <ProtectedRoute>
          <Trending themeChange={themeChange} theme={theme} />
        </ProtectedRoute>
      ),
      children:[
        {
          index:true,
          element:<Navigate to={"movies"} replace/>
        },
        {
        path:"movies",
        element: <h2>Movies</h2>
        },
        {
        path:"popular",
        element: <h2>Popular</h2>
        },
        {
        path:"tv",
        element: <h2>TV</h2>
        }
    ]
    }
  ])

  return (
    <>
      <div className={`${theme == 'dark' ? 'dark dark:bg-gray-800' : ''} bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen`}>
        <RouterProvider router={routes}></RouterProvider>
      </div >
    </>
  )
}
