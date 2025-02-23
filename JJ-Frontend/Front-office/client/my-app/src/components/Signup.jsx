// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";

// import swal from "sweetalert";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { registerMessage } = useSelector((state) => state.auth);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if (username.trim() === "") return toast.error("Username is required");
//     if (email.trim() === "") return toast.error("Email is required");
//     if (password.trim() === "") return toast.error("Password is required");

//     dispatch(registerUser({ username, email, password }));
//     toast.success("Account Created");
//   };

//   if (registerMessage) {
//     swal({
//       title: registerMessage,
//       icon: "success",
//     }).then((isOk) => {
//       if (isOk) {
//         navigate("/login");
//       }
//     });
//   }

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//       <img
//         className="mx-auto h-10 w-auto"
//         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//         alt="Your Company"
//       />
//       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//         Sign in to your account
//       </h2>
//     </div>

//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//       <form className="space-y-6" action="#" method="POST">
//         <div>
//           <div className="flex flex-column">
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center justify-between">
//             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//               Password
//             </label>
//             <div className="text-sm">
//               <a href="#" className="font-semibold text-[#F47458] hover:text-indigo-500">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//           <div className="mt-2">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="flex w-full justify-center rounded-md bg-[#F47458] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign in
//           </button>
//         </div>
//       </form>

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Not a member?{' '}
//         <a href="#" className="font-semibold leading-6 text-[#F47458] hover:text-indigo-500">
//           Login
//         </a>
//       </p>
//     </div>
//   </div>
//   );
// };

// export default Signup;
import { useState } from "react";

// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Signup = () => {
  const dispatch = useDispatch();
  // const { registerMessage } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required");
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    dispatch(registerUser({ username, email, password }));
    toast.success("Account Created");
  };

  const navigate = useNavigate();

  // if (registerMessage) {
  //   swal({
  //     title: registerMessage,
  //     icon: "success",
  //   }).then((isOk) => {
  //     if (isOk) {
  //       navigate("/login");
  //     }
  //   });
  // }
  return (
    <section className="flex justify-center items-center ">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="font-serif	mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={formSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  className="block text-sm font-medium leading-6 text-gray-900 sm:text-center"
                >
                  Password
                </label>
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
                Sin up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            already have account?
            <Link
              to="/login"
              className="font-semibold leading-6 text-[#F47458] hover:text-indigo-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
