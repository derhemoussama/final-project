// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/apiCalls/authApiCall";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if (email.trim() === "") return toast.error("Email is required");
//     if (password.trim() === "") return toast.error("Password is required");

//     const res = await axios(/api/login)
//     dispatch(loginUser({ emailOrUsername: email, password }));
//     if(res.data.status===201)
//     {
//       navigate('/')
//     }
//   };

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/apiCalls/authApiCall";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formSubmitHandler = async (e) => {
//     e.preventDefault();
//     if (email.trim() === "") return toast.error("Email is required");
//     if (password.trim() === "") return toast.error("Password is required");

//     try {
//       const res = await axios.post("http://localhost:2500/api/login", {
//         emailOrUsername: email,
//         password,
//       }, {
//         withCredentials: true
//       });
//       if (res.status === 201) {
//         dispatch(loginUser({ emailOrUsername: email, password }));
//         navigate("/");
//       } else {
//         toast.error("Login failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   return (

//     <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen max-h-screen">
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto  w-24"
//             src="/src/assets/images/logo2.svg"
//             alt="JJ logo"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-4" onSubmit={formSubmitHandler}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//               <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-[#F47458] hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//               <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-[#F47458] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           {/* <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{" "}
//             <a
//               href="/signup"
//               className="font-semibold leading-6 text-[#F47458] hover:text-indigo-500"
//             >
//               Signup
//             </a>
//           </p> */}
//         </div>
//       </div>

//       {/* side image */}
//       <div className="max-h-screen hidden lg:block">
//         <img
//           src="/src/assets/images/imageside.jpg"
//           alt="login side image"
//           className="bg-cover w-full max-h-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/apiCalls/authApiCall";
import { loginAction } from "../redux/auth/authSlice";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    try {
      const res = await axios.post(
        "http://localhost:2500/api/login",
        {
          emailOrUsername: email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      const { user, token } = res.data;
      dispatch(loginAction(user));
      localStorage.setItem("userInfo", JSON.stringify(token)); // Save user info to local storage
      navigate("/");

      // if (res.status === 201) {
      //   const userData = { emailOrUsername: email, password };
      //   try {
      //     const { data } = await request.post("/api/login", userData, {
      //       withCredentials: true,
      //     });
      //     console.log(data);
      //     const { user, token } = data;
      //     dispatch(login(user));
      //     localStorage.setItem("userInfo", JSON.stringify(token)); // Save user info to local storage
      //     navigate("/");
      //   } catch (error) {
      //     toast.error(error.response.data.message);
      //   }
      // } else {
      //   toast.error("Login failed. Please try again.");
      // }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen max-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto  w-24"
            src="/src/assets/images/logo2.svg"
            alt="JJ logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={formSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#F47458] hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F47458] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* side image */}
      <div className="max-h-screen hidden lg:block">
        <img
          src="/src/assets/images/imageside.jpg"
          alt="login side image"
          className="bg-cover w-full max-h-full"
        />
      </div>
    </section>
  );
};

export default Login;
