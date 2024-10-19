import React from "react";
import { PieChart, LineChart } from "@mui/x-charts";

const Dashboard = () => {
  return (
    <main className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Dashboard 💜</h1>
          <h2 className="text-gray-600 ml-0.5">
            {" "}
            JEWLELRY JUNCTION 
          </h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            Manage dashboard
          </button>
          <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Create new dashboard
          </button>
        </div>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
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
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold">
              Total Registered Customers
            </span>
            <span className="block text-gray-500">Last 12 months</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold">Total Revenue</span>
            <span className="block text-gray-500">Last 12 months</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
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
                strokeWidth="2"
                d="M17 10v4m0 0V10m0 4H7m10 0h3a2 2 0 002-2V6a2 2 0 00-2-2h-1a3 3 0 00-3 3v2"
              ></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold">Number of Sales</span>
            <span className="block text-gray-500">Last 12 months</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
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
                strokeWidth="2"
                d="M17 10v4m0 0V10m0 4H7m10 0h3a2 2 0 002-2V6a2 2 0 00-2-2h-1a3 3 0 00-3 3v2"
              ></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold">Pending Orders</span>
            <span className="block text-gray-500">Last 12 months</span>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Total Registered Customers
          </h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
            series={[
              {
                data: [10, 15, 25, 30, 40, 50, 60],
              },
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Number of Sales</h3>

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

// export default function BasicPie() {
//   return (
//     <PieChart
//       series={[
//         {
//           data: [
//             { id: 0, value: 10, label: 'series A' },
//             { id: 1, value: 15, label: 'series B' },
//             { id: 2, value: 20, label: 'series C' },
//           ],
//         },
//       ]}
//       width={400}
//       height={200}
//     />
//   ); pour Total Products
// }  et juste a cote tu peux faire une autre pour Customers Growth in 12 month 30 days et 7 days : donc modifer tout le code :
// import React from "react";

// const Dashboard = () => {
//   return (
//     <main className="p-6 sm:p-10 space-y-6">
//       <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
//         <div className="mr-6">
//           <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
//           <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
//         </div>
//         <div className="flex flex-wrap items-start justify-end -mb-3">
//           <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//               ></path>
//             </svg>
//             Manage dashboard
//           </button>
//           <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               ></path>
//             </svg>
//             Create new dashboard
//           </button>
//         </div>
//       </div>
//       <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
//         <div className="flex items-center p-8 bg-white shadow rounded-lg">
//           <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//               ></path>
//             </svg>
//           </div>
//           <div>
//             <span className="block text-2xl font-bold">62</span>
//             <span className="block text-gray-500">Students</span>
//           </div>
//         </div>
//         <div className="flex items-center p-8 bg-white shadow rounded-lg">
//           <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//               ></path>
//             </svg>
//           </div>
//           <div>
//           <span className="block text-2xl font-bold">24</span>
//             <span className="block text-gray-500">Projects</span>
//           </div>
//         </div>
//         <div className="flex items-center p-8 bg-white shadow rounded-lg">
//           <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M13 10V3L4 14h7v7l9-11h-7z"
//               ></path>
//             </svg>
//           </div>
//           <div>
//             <span className="block text-2xl font-bold">18</span>
//             <span className="block text-gray-500">Assignments</span>
//           </div>
//         </div>
//         <div className="flex items-center p-8 bg-white shadow rounded-lg">
//           <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M17 10v4m0 0V10m0 4H7m10 0h3a2 2 0 002-2V6a2 2 0 00-2-2h-1a3 3 0 00-3 3v2"
//               ></path>
//             </svg>
//           </div>
//           <div>
//             <span className="block text-2xl font-bold">5</span>
//             <span className="block text-gray-500">Upcoming tests</span>
//           </div>
//         </div>
//       </section>
//       <section className="bg-white shadow rounded-lg p-6 md:p-8">
//         <h2 className="text-xl font-semibold mb-4">Upcoming tests</h2>
//         <div className="flex space-x-6">
//           <div className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg"></div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-1">Introduction to UX/UI</h3>
//             <p className="text-gray-600 mb-2">2 weeks • Design basics and principles</p>
//             <p className="text-sm text-gray-500">Starts on April 29, 2024</p>
//           </div>
//           <a
//             href="#"
//             className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
//           >
//             <span className="sr-only">Messages</span>
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//               ></path>
//             </svg>
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Dashboard;
