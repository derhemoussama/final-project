// import React, { useState, useEffect } from "react";
// import request from "../utils/request";
// import Table from "./Table";
// import Pagination from "@mui/material/Pagination";

// function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [page, setPage] = useState(1);
//   const customersPerPage = 4;

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await request.get("/customers");
//       const formattedCustomers = response.data.map(customer => ({
//         ...customer,
//         createdAt: formatCreatedAt(customer.createdAt)
//       }));
//       setCustomers(formattedCustomers);
//       console.log(formattedCustomers);
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//     }
//   };

//     // Joined at formatting
//     const formatCreatedAt = (createdAt) => {
//         try {
//           const date = new Date(createdAt);
//           return date.toISOString().split("T")[0];
//         } catch (error) {
//           console.error("Error formatting createdAt:", error);
//           return ""; // Return empty string or any default value if unable to format
//         }
//       };
      

//   const startIndex = (page - 1) * customersPerPage;
//   const endIndex = startIndex + customersPerPage;
//   const displayedCustomers = customers.slice(startIndex, endIndex);

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const columns = [
//     { key: "username", title: "Name" },
//     { key: "email", title: "Email" },
//     { key: "createdAt", title: "Joined at" },
//     { key: "verified", title: "Account Validation" },
//     { key: "status", title: "Status" },
//   ];

//   return (
//     <div className="flex flex-col">
//       <Table columns={columns} data={displayedCustomers} />
//       <Pagination
//         count={Math.ceil(customers.length / customersPerPage)}
//         page={page}
//         onChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default Customers;


// / components/Customers.jsx
import React, { useState, useEffect } from "react";
import request from "../utils/request";
import Table from "./Table";
import Pagination from "@mui/material/Pagination";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const customersPerPage = 3;
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await request.get("/customers");
      const formattedCustomers = response.data.map(customer => ({
        ...customer,
        createdAt: formatCreatedAt(customer.createdAt)
      }));
      setCustomers(formattedCustomers);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError(error); // Set error state if there's an error
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // Joined at formatting
  const formatCreatedAt = createdAt => {
    try {
      const date = new Date(createdAt);
      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("Error formatting createdAt:", error);
      return ""; // Return empty string or any default value if unable to format
    }
  };

  const startIndex = (page - 1) * customersPerPage;
  const endIndex = startIndex + customersPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    { key: "username", title: "Name" },
    { key: "email", title: "Email" },
    { key: "createdAt", title: "Joined at" },
    { key: "verified", title: "Account Validation" },
    { key: "status", title: "Status" }
  ];

  // Render loading state if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an error fetching data
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render table once data is fetched
  return (
    <div className="flex flex-col">
      <Table columns={columns} data={displayedCustomers} />
      <Pagination
        count={Math.ceil(customers.length / customersPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Customers;