

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, fetchUsers, fetchUsersByCriteria, modifierUser, addUser } from "../Services/user";
import ProfilePicture from "./ProfilePicture";
import Pagination from "@mui/material/Pagination";
import { selectUsers, updateUsers } from "../redux/users/userSlice";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import BootstrapDialogTitle from "@mui/material/DialogTitle";
import BootstrapDialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { RiDeleteBinFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { GrView } from "react-icons/gr";

import swal from "sweetalert";
import Collapse from "@mui/material/Collapse";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Users() {
  const { users } = useSelector(selectUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    Username: "",
    fullname: "",
    email: "",
    role: "",
    status: "active"
  });
  const [page, setPage] = useState(1);
  const usersPerPage = 3; // Number of users per page

  useEffect(() => {
    fetchUsers();
  }, [page]); // Fetch users every time the page changes

  // Open edit dialog
  const handleOpenEditDialog = (user) => {
    setEditUser(user);
    setEditedUser({
      Username: user.Username,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setOpenDialog(true);
  };

  // Open add dialog
  const handleOpenAddDialog = () => {
    setEditUser(null);
    setEditedUser({
      Username: "",
      fullname: "",
      email: "",
      role: "",
      status: ""
    });
    setOpenDialog(true);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Delete user
  const deletePostHandler = (user) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        deleteUser(user?._id)
          .then(() => {
            const updatedUsers = users.filter((u) => u._id !== user._id);
            dispatch(updateUsers(updatedUsers));
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user. Please try again.");
          });
      }
    });
  };

  // Save edit
  const handleSaveEdit = async () => {
    try {
      await modifierUser(editUser?._id, editedUser);
      const updatedUser = { ...editUser, ...editedUser };
      const updatedUsers = users.map(user => user._id === updatedUser._id ? updatedUser : user);
      dispatch(updateUsers(updatedUsers));
      setOpenDialog(false);
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error.message || "Failed to update user details. Please try again.");
    }
  };

  // Save add
  const handleAddSave = async () => {
    try {
      const addedUser = await addUser(editedUser);
      dispatch(updateUsers([...users, addedUser]));
      setOpenDialog(false);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(error.message || "Failed to add user. Please try again.");
    }
  };

  // Function to toggle collapse state
  const handleCollapseToggle = (userId) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId], // Toggle collapse state for the specified user
    }));
  };

  // Function to filter users by criteria
  useEffect(() => {
    fetchUsersByCriteria(searchQuery, searchCriteria)
      .then((searchResults) => dispatch(updateUsers(searchResults)))
      .catch((error) => {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users. Please try again.");
      });
  }, [searchQuery, searchCriteria, dispatch]);

  // Calculate start and end indexes of users to be displayed on the current page
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200">
            <div className="py-3 px-4 flex justify-between items-center">
              <div className="flex">
                <div className="relative max-w-md">
                  <label className="sr-only">Search</label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="py-2 px-3 block w-auto border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search for users"
                  />
                </div>
                <div>
                  <select
                    value={searchCriteria}
                    onChange={(e) => setSearchCriteria(e.target.value)}
                    className="border-transparent bg-transparent text-gray-400 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <option value="name">Name</option>
                    <option value="role">Role</option>
                    <option value="email">Email</option>
                  </select>
                </div>
              </div>
              <button
                className="inline-flex py-2 px-3 ps-9  text-sm text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-4 mb-3"
                onClick={handleOpenAddDialog}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-5 w-5 text-white -ml-1 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Add new User
              </button>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Member
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Last activity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayedUsers.map((user) => (
                <React.Fragment key={user._id}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 flex items-center">
                      <ProfilePicture fullname={user.fullname} />
                      <span className="ml-3">{user.fullname}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Today
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex justify-end items-center space-x-3">
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-900 focus:outline-none"
                          onClick={() => handleCollapseToggle(user._id)}
                        >
                          <GrView />
                          <path d="M10 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3m-4 8v4m0-8V6m4 8h3m2-3h-8"></path>
                        </button>
                        <button
                          type="button"
                          className="text-green-600 hover:text-green-900 focus:outline-none"
                          onClick={() => handleOpenEditDialog(user)}
                        >
                          <RiEdit2Fill />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
                        </button>
                        <button
                          type="button"
                          className="text-red-600 hover:text-red-900 focus:outline-none"
                          onClick={() => deletePostHandler(user)}
                        >
                          <RiDeleteBinFill />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6">
                      <Collapse in={openCollapse[user._id]} timeout="auto" unmountOnExit>
                        <div className="p-4 bg-gray-100">
                          <h3 className="text-lg font-semibold mb-2">
                            Additional Information
                          </h3>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed quis metus eu magna vulputate varius.
                            Quisque nec dolor id leo porttitor fermentum. In
                            hac habitasse platea dictumst. Nulla facilisi.
                            Suspendisse et convallis urna. Nam ac mauris
                            aliquet, consequat velit nec, feugiat ligula. Nulla
                            facilisi. Curabitur sed libero lectus. Vivamus
                            fermentum dui vitae magna tincidunt, ac feugiat
                            nisi ultrices. Donec varius augue id nunc vehicula
                            volutpat. Sed pharetra vehicula lacinia. Phasellus
                            et turpis orci. Fusce auctor nunc eget semper
                            vehicula.
                          </p>
                        </div>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-3 px-4 flex justify-end">
          <Pagination
            count={Math.ceil(users.length / usersPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>

      <BootstrapDialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <BootstrapDialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {editUser ? 'Edit User' : 'Add new User'}
        </BootstrapDialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <BootstrapDialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="fullname"
            label="Full Name"
            type="text"
            fullWidth
            value={editedUser.fullname}
            onChange={(e) =>
              setEditedUser((prevUser) => ({
                ...prevUser,
                fullname: e.target.value,
              }))
            }
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser((prevUser) => ({
                ...prevUser,
                email: e.target.value,
              }))
            }
          />
          {!editUser && (
            <>
              <TextField
                margin="dense"
                id="Username"
                label="Username"
                type="text"
                fullWidth
                value={editedUser.Username}
                onChange={(e) =>
                  setEditedUser((prevUser) => ({
                    ...prevUser,
                    Username: e.target.value,
                  }))
                }
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                value={editedUser.password}
                onChange={(e) =>
                  setEditedUser((prevUser) => ({
                    ...prevUser,
                    password: e.target.value,
                  }))
                }
              />
            </>
          )}
          <FormControl fullWidth margin="dense">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              label="Role"
              value={editedUser.role}
              onChange={(e) =>
                setEditedUser((prevUser) => ({
                  ...prevUser,
                  role: e.target.value,
                }))
              }
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              label="Status"
              value={editedUser.status}
              onChange={(e) =>
                setEditedUser((prevUser) => ({
                  ...prevUser,
                  status: e.target.value,
                }))
              }
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </BootstrapDialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button autoFocus onClick={editUser ? handleSaveEdit : handleAddSave}>
            {editUser ? 'Save Changes' : 'Save'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Users;




