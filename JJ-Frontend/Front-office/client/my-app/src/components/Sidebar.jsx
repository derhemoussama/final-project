
// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";
// const Sidebar = () => {
//   const { auth :user } = useSelector(selectAuth);
 
//   console.log("nav", user);
//   return (
//     <aside className="hidden sm:block w-64 bg-white border-r border-gray-200 min-h-screen">
//       <div className="py-6 px-3 bg-gray-50">
//         <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
//         <p className="text-sm text-gray-600">Welcome back, {user?.fullname}!</p>
//       </div>
//       <nav className="mt-6">
//         <ul>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M3 11a9 9 0 0118 0h-2a7 7 0 00-14 0H3z" />
//                 <path d="M9 21v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
//               </svg>
//               Dashboard
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/products" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Products
//             </Link>
            
//           </li>
        



//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/orders" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Orders
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/reviews" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Reviews
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Categories" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Categories
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Customers" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Customers
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/users" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Users
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Sidebar = () => {
//   const { auth: user } = useSelector(selectAuth);
//   const [showProducts, setShowProducts] = React.useState(false);

//   const toggleProducts = () => {
//     setShowProducts(!showProducts);
//   };

//   return (
//     <aside className="hidden sm:block w-64 bg-white border-r border-gray-200 min-h-screen">
//       <div className="py-6 px-3 bg-gray-50">
//         <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
//         <p className="text-sm text-gray-600">Welcome back, {user?.fullname}!</p>
//       </div>
//       <nav className="mt-6">
//         <ul>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M3 11a9 9 0 0118 0h-2a7 7 0 00-14 0H3z" />
//                 <path d="M9 21v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
//               </svg>
//               Dashboard
//             </Link>
//           </li>
//           <li
//             className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
//             onClick={toggleProducts}
//           >
//             <div className="flex items-center cursor-pointer">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Products
//               <RiArrowDropDownLine />
//             </div>
//             {showProducts && (
//               <ul>
//                 <li>
//                   <Link
//                     to="/products"
//                     className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 block"
//                   >
//                     Product
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/products/list"
//                     className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 block"
//                   >
//                     List Product
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/orders" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Orders
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/reviews" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Reviews
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Categories" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Categories
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Customers" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Customers
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/users" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Users
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



// import React from "react";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";
// import { MdFormatListBulletedAdd } from "react-icons/md";
// import { MdFormatListBulleted } from "react-icons/md";
// // const Sidebar = () => {

// const Sidebar = () => {
//   const { auth: user } = useSelector(selectAuth);
//   return (
//     <aside className="hidden sm:block w-64 bg-white border-r border-gray-200 min-h-screen">
//       <div className="py-6 px-3 bg-gray-50">
//         <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
//         <p className="text-sm text-gray-600">Welcome back, {user?.fullname}!</p>
//       </div>
//       <nav className="mt-6">
//         <ul>
//           {/* Dashboard */}
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M3 11a9 9 0 0118 0h-2a7 7 0 00-14 0H3z" />
//                 <path d="M9 21v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
//               </svg>
//               Dashboard
//             </Link>
//           </li>

//           {/* Products Accordion */}
//           <Accordion
//             className="py-0"
//             sx={{
//               boxShadow: "none",
//               // padding: "0.25rem 0.25rem",
//             }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//               className="bg-white py-0"
//             >
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Products
//             </AccordionSummary>
//             <AccordionDetails className="py-0 px-1">
//               <ul className="ml-4">
//                 <li className="py-0 flex align-center">
//                   {/* Adjusted icon size and added margin for alignment */}
//                   <MdFormatListBulleted className="text-lg mr-2 mt-1"  />
//                   <Link
//                     to="/products"
//                     className="text-gray-600 hover:text-gray-800"
//                   >
//                     All Products
//                   </Link>
//                 </li>
//                 <li className="py-2 flex align-center">
//                 <MdFormatListBulletedAdd className="text-lg mr-2 mt-1"/>
//                   <Link
//                     to="/products/add"
//                     className="text-gray-600 hover:text-gray-800"
//                   >
//                     Add Product
//                   </Link>
//                 </li>
//               </ul>
//             </AccordionDetails>
//           </Accordion>

//           {/* Other sidebar items */}
//           {/* Add your other sidebar items here */}

//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/orders" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Orders
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/reviews" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Reviews
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Categories" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Categories
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/Customers" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Customers
//             </Link>
//           </li>
//           <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
//             <Link to="/users" className="flex items-center">
//               <svg
//                 className="h-5 w-5 mr-2 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Users
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/authSlice";
// const Sidebar = () => {

import { MdOutlineRateReview } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { TbShoppingBag } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { TbUsersMinus } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";





const Sidebar = () => {
  const { auth: user } = useSelector(selectAuth);
  return (
    <aside className="hidden sm:block w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="py-6 px-3 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-600">Welcome back, {user?.fullname}!</p>
      </div>
      <nav className="mt-6 flex flex-col justify-between h-full">
        <ul>
          {/* Dashboard */}
          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/" className="flex items-center">
              <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 11a9 9 0 0118 0h-2a7 7 0 00-14 0H3z" />
                <path d="M9 21v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
              </svg>
              Dashboard
            </Link>
          </li>

          {/* Products Accordion */}
          <Accordion
            className="py-0"
            sx={{
              boxShadow: "none",
              // padding: "0.25rem 0.25rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white py-0"
            >
              <TbListDetails className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Products
            </AccordionSummary>
            <AccordionDetails className="py-0 px-5 mr-">
              <ul className="ml-2">
                <li className="py-0">
                  <Link
                    to="/products"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    All Products
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/products/add"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Add Product
                  </Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* Other sidebar items */}
          {/* Add your other sidebar items here */}

          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/orders" className="flex items-center">
            <TbShoppingBag className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Orders
            </Link>
          </li>
          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/reviews" className="flex items-center">
            <MdOutlineRateReview className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Reviews
            </Link>
          </li>
          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/Categories" className="flex items-center">
            <BiCategory className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Categories
            </Link>
          </li>
          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/Customers" className="flex items-center">
            <FaUsers className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Customers
            </Link>
          </li>
          <li className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
            <Link to="/users" className="flex items-center">
            <TbUsersMinus className="h-5 w-5 mr-2 text-gray-400"/>
              {/* <svg
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;