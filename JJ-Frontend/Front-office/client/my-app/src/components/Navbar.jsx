//works normal ms avec la photo

// import React from "react";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";

// const Navbar = () => {
//   const {auth:user} = useSelector(selectAuth);

//   console.log("Nav User:", user);
//   return (
//     <header className="flex items-center h-20 px-6 sm:px-10 bg-white w-full ">
//       <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
//         <span className="sr-only">Menu</span>
//         <svg
//           aria-hidden="true"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="h-6 w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h7"
//           />
//         </svg>
//       </button>
//       <div className="relative w-full max-w-md sm:-ml-2">
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <input
//           type="text"
//           role="search"
//           placeholder="Search..."
//           className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
//         />
//       </div>
//       <div className="flex flex-shrink-0 items-center ml-auto">
//         {user && (
//           <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
//             <span className="sr-only">User Menu</span>
//             <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
//               <span className="font-semibold">{user?.fullname}</span>
//               <span className="text-sm text-gray-600">{user?.role}</span>
//             </div>
//             <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
//               <img
//                 src="https://randomuser.me/api/portraits/women/68.jpg"
//                 alt="user profile"
//                 className="h-full w-full object-cover"
//               />
//             </span>
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="hidden sm:block h-6 w-6 text-gray-300"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         )}
//         <div className="border-l pl-3 ml-3 space-x-1">
//           <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
//             <span className="sr-only">Notifications</span>
//             <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
//             <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//           </button>
//           <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
//             <span className="sr-only">Log out</span>
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// //works sans select

// import React from "react";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";
// import ProfilePicture from "./ProfilePicture"; // Import du composant ProfilePicture

// const Navbar = () => {
//   const { auth: user } = useSelector(selectAuth);

//   console.log("Nav User:", user);
//   return (
//     <header className="flex items-center h-20 px-6 sm:px-10 bg-white w-full ">
//       <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
//         <span className="sr-only">Menu</span>
//         <svg
//           aria-hidden="true"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="h-6 w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h7"
//           />
//         </svg>
//       </button>
//       <div className="relative w-full max-w-md sm:-ml-2">
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <input
//           type="text"
//           role="search"
//           placeholder="Search..."
//           className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
//         />
//       </div>
//       <div className="flex flex-shrink-0 items-center ml-auto">
//         {user && (
//           <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
//             <span className="sr-only">User Menu</span>
//             <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
//               <span className="font-semibold">{user?.fullname}</span>
//               <span className="text-sm text-gray-600">{user?.role}</span>
//             </div>
//             <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
//               {/* Utilisation du composant ProfilePicture au lieu de l'image */}
//               <ProfilePicture fullname={user?.fullname} />
//             </span>
//              <svg
//               aria-hidden="true"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="hidden sm:block h-6 w-6 text-gray-300"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>

//           </button>
//         )}
//         <div className="border-l pl-3 ml-3 space-x-1">
//           <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
//             <span className="sr-only">Notifications</span>
//             <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
//             <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//           </button>
//           <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
//             <span className="sr-only">Log out</span>
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
//on teste ce code
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/authSlice";
import ProfilePicture from "./ProfilePicture"; // Import du composant ProfilePicture
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Navbar = () => {
  const { auth: user } = useSelector(selectAuth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("Nav User:", user);
  return (
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white w-full ">
      <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
        <span className="sr-only">Menu</span>
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <div className="relative w-full max-w-md sm:-ml-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          role="search"
          placeholder="Search..."
          className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
        />
      </div>
      <div className="flex flex-shrink-0 items-center ml-auto">
        {user && (
          <div className="flex items-center">
            <div className="flex flex-col items-end leading-tight mr-2">
              <span className="font-semibold">{user?.fullname}</span>
              <span className="text-sm text-gray-600">{user?.role}</span>
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <ProfilePicture fullname={user?.fullname} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
            </Menu>
          </div>
        )}
        <div className="border-l pl-3 ml-3 space-x-1">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Log out</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

//works avec selct et avatar mais prbl de desgn

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/authSlice";
// import ProfilePicture from "./ProfilePicture"; // Import du composant ProfilePicture
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import IconButton from "@mui/material/IconButton";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// const Navbar = () => {
//   const { auth: user } = useSelector(selectAuth);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <header className="flex items-center h-20 px-6 sm:px-10 bg-white w-full ">
//       <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
//         <span className="sr-only">Menu</span>
//         <svg
//           aria-hidden="true"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="h-6 w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h7"
//           />
//         </svg>
//       </button>
//       <div className="relative w-full max-w-md sm:-ml-2">
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <input
//           type="text"
//           role="search"
//           placeholder="Search..."
//           className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
//         />
//       </div>
//       <div className="flex flex-shrink-0 items-center ml-auto">
//         {user && (
//           <div>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               // onClick={handleClick}
//               color="inherit"
//             >
//                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
//               <span className="font-semibold">{user?.fullname}</span>
//               <span className="text-sm text-gray-600">{user?.role}</span>
//             </div>
//             <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
//               <ProfilePicture fullname={user?.fullname} />
//               </span>
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={handleClose}>Settings</MenuItem>

//             </Menu>
//           </div>
//         )}
//         <IconButton
//           size="large"
//           aria-label="settings"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleClick}
//           color="inherit"
//         >
//           <SettingsIcon />
//         </IconButton>
//         <IconButton
//           size="large"
//           aria-label="notifications"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           // onClick={handleClick}
//           color="inherit"
//         >
//           <NotificationsIcon />
//         </IconButton>
//         <IconButton
//           size="large"
//           aria-label="logout"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           // onClick={handleClick}
//           color="inherit"
//         >
//           <ExitToAppIcon />
//         </IconButton>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
