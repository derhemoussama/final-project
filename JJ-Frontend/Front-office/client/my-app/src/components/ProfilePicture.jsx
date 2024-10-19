// import React from "react";
// import { generateInitials, generateRandomColor } from "../utils/helper";

// function ProfilePicture({ firstName, lastName }) {
//   const initials = generateInitials(firstName, lastName);
//   const backgroundColor = generateRandomColor();

//   return (
//     <div
//       className="w-10 h-10 flex items-center justify-center rounded-full"
//       style={{ backgroundColor, color: 'white' }}
//     >
//       {initials}
//     </div>
//   );
// }

// export default ProfilePicture;

// ProfilePicture.jsx

import React from "react";

function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const generateInitials = (fullname) => {
  if (!fullname || typeof fullname !== "string") return "";
  const initials = fullname.split(" ").map((name) => name.charAt(0));
  return initials.join("").toUpperCase();
};

const ProfilePicture = ({ fullname }) => {
  const initials = generateInitials(fullname);
  const backgroundColor = generateRandomColor();
  
  return (
    <div
      className="rounded-full h-10 w-10 flex items-center justify-center"
      style={{ backgroundColor, color: 'white' }}
    >
      <span className="text-sm font-semibold">{initials}</span>
    </div>
  );
};

export default ProfilePicture;

