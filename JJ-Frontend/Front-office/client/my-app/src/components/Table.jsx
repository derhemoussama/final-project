


import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import ProfilePicture from './ProfilePicture'; // Import the ProfilePicture component
import * as XLSX from 'xlsx';
import request from '../utils/request';

const Table = ({ columns, data, actions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState(data); // Define and initialize the data state

  useEffect(() => {
    // Function to filter data based on search query
    const filteredData = data.filter(item =>
      item.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTableData(filteredData);
  }, [searchQuery, data]);

  // Function to toggle customer status
  const toggleStatus = async (customerId, status) => {
    try {
      // Toggle the status in the database
      await request.put(`/customers/${customerId}`, { status: status === 'active' ? 'inactive' : 'active' });
      
      // Update the local state to reflect the toggled status
      const updatedData = tableData.map(item => {
        if (item._id === customerId) {
          return { ...item, status: status === 'active' ? 'inactive' : 'active' };
        }
        return item;
      });
      setTableData(updatedData);
    } catch (error) {
      console.error('Error toggling customer status:', error);
    }
  };

  // Function to export data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');
    XLSX.writeFile(workbook, 'customers.xlsx');
  };

  // Function to print data
  const printData = () => {
    window.print();
  };

  // Joined at formatting
  const formatCreatedAt = (createdAt) => {
    try {
      const date = new Date(createdAt);
      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("Error formatting createdAt:", error);
      return ""; // Return empty string or any default value if unable to format
    }
  };

  return (
    <div>
      <div className="py-3 px-4 flex justify-between items-center">
        <div className="flex">
          <div className="relative max-w-md mb-4">
            <label className="sr-only">Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 px-3 block w-auto border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Search for customers"
            />
          </div>
        </div>
        <div>
          <button 
            onClick={exportToExcel} 
            className="inline-flex py-2 px-3 text-sm text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-4 mb-3"
          >
            Export Excel
          </button>
          <button 
            onClick={printData} 
            className="inline-flex py-2 px-3 text-sm text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-4 mb-3"
          >
            Print
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(column => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map(item => (
            <tr key={item.id}>
              {columns.map(column => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                >
                  {/* If the column key is 'username', display the ProfilePicture component */}
                  {column.key === 'username' ? (
                    <div className="flex items-center space-x-2">
                      <ProfilePicture fullname={item.username} />
                      <span>{item.username}</span>
                    </div>
                  ) : (
                    // If the column key is 'verified', display "Yes" in green and "No" in red
                    column.key === 'verified' ? (
                      <span style={{ color: item.verified ? 'green' : 'red' }}>
                        {item.verified ? "Yes" : "No"}
                      </span>
                    ) : (
                      // If the column key is 'status', apply the style for "Active"
                      column.key === 'status' ? (
                        <Switch
                          checked={item.status === 'active'}
                          onChange={() => toggleStatus(item._id, item.status)}
                          color="secondary"
                        //   "warning"
                        //"default"
                        />
                      ) : (
                        // Otherwise, simply display the value of the column
                        column.key === 'createdAt' ? formatCreatedAt(item.createdAt) : item[column.key]
                      )
                    )
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;