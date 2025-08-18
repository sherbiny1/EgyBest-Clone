    import { useFormik } from "formik";
    import Navbar from "../../Components/Navbar/Navbar";
    import * as yup from "yup"
    import { useNavigate } from "react-router";

    const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    const schema = yup.object({
        name: yup.string().required("Name Is Required").min(3, "Name must be more than 3 character").max(20, "Name must be less than 20 character"),
        email: yup.string().required("Email Is Required").email("Write a Valid Email"),
        password: yup.string().required("Password is Required").matches(regexPassword, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        rePassword: yup.string().required("Repassword is required").oneOf([yup.ref("password")], "Enter RePassword Matches with password"),
        phone: yup.string().required("Enter Your phone number").matches(regexPhone, "Write a valid Phone number")
    })
    

    export default function SignUp({ themeChange, theme }) {
        let formik = useFormik({
            initialValues: { name: "", email: "", password: "", rePassword: "", phone: "" },
            validationSchema: schema,
            onSubmit: submitFunc
        })

        const navigate = useNavigate()

        function submitFunc(values) {
            console.log(values);

            // Save user data to localStorage
            localStorage.setItem("token", "fakeToken_12345");
            localStorage.setItem("user", JSON.stringify(values));

            console.log("Signed In");

            // Redirect to /home
            navigate("/Login");
        }

        return (
            <>
                <Navbar themeChange={themeChange} theme={theme} />
                <div className="container px-8 mt-5">
                    <h2 className="text-2xl font-semibold flex items-center gap-3">Register Now: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-violet-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    </h2>

                    <form className="px-3 space-y-4 mt-3" onSubmit={formik.handleSubmit}>
                        <div className="name">
                            <input type="text" placeholder="Enter Your Name" className="form-control" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" />
                            {formik.errors.name && formik.touched.name ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.name}</p> : ""}
                        </div>
                        <div className="email">
                            <input type="email" placeholder="Enter Your Email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" />
                            {formik.errors.email && formik.touched.email ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.email}</p> : ""}

                        </div>
                        <div className="password">
                            <input type="password" placeholder="Enter Your Password" className="form-control" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" />
                            {formik.errors.password && formik.touched.password ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.password}</p> : ""}

                        </div>
                        <div className="rePassword">
                            <input type="password" placeholder="Re-Enter Your Password" className="form-control" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="rePassword" />
                            {formik.errors.rePassword && formik.touched.rePassword ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.rePassword}</p> : ""}

                        </div>
                        <div className="phone">
                            <input type="tel" placeholder="Enter Your Phone Number" className="form-control" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" />
                            {formik.errors.phone && formik.touched.phone ? <p className="bg-red-200 text-red-800 mt-2 rounded-md px-2 py-1 ">* {formik.errors.phone}</p> : ""}

                        </div>

                        <button type="submit" className="btn hover:bg-violet-700 text-white bg-violet-600 disabled:bg-red-600" disabled={!(formik.isValid && formik.dirty)}>Sign Up</button>
                    </form>
                </div>
            </>
        )
    }
