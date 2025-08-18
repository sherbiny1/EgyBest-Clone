import { useFormik } from "formik";
import Navbar from "../../Components/Navbar/Navbar";
import * as yup from "yup"
import { useNavigate } from "react-router";
import { useState } from "react";

const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

const schema = yup.object({
    email: yup.string().required("Email Is Required").email("Write a Valid Email"),
    password: yup.string().required("Password is Required").matches(regexPassword, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
})

export default function Login({ themeChange, theme }) {
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: submitFunc
    })

    const [loginError, setLoginError] = useState("");


    const navigate = useNavigate()

    function submitFunc(values) {
        const savedUser = JSON.parse(localStorage.getItem("user"));

    // If there's no registered user
        if (!savedUser) {
            setLoginError("No registered user found. Please sign up first.");
         return;
        }
        //sockets io
    // Compare email and password
        if (values.email === savedUser.email &&values.password === savedUser.password) {
            localStorage.setItem("token", "fakeToken_12345"); // set token again or keep it
            console.log("Logged in successfully");
            navigate("/home");
        } else {
            setLoginError("Invalid email or password. Please try again.");
        }
  }

    return (
        <>
            <Navbar themeChange={themeChange} theme={theme} />
            <div className="container px-8 mt-5">
                <h2 className="text-2xl font-semibold flex items-center gap-3">Login: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-violet-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </h2>


                <form className="px-3 space-y-4 mt-3" onSubmit={formik.handleSubmit}>
                    <div className="email">
                        <input type="email" placeholder="Enter Your Email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" />
                        {formik.errors.email && formik.touched.email ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.email}</p> : ""}

                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter Your Password" className="form-control" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" />
                        {formik.errors.password && formik.touched.password ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.password}</p> : ""}

                    </div>

                    <button type="submit" className="btn hover:bg-violet-700 text-white bg-violet-600 disabled:bg-red-600" disabled={!(formik.isValid && formik.dirty)}>Login</button>
                </form>
            </div>
        </>
    )
}
