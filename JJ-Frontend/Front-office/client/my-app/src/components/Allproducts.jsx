import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../Services/product";
import { selectProducts, updateProducts } from "../redux/products/productSlice";
import Pagination from "@mui/material/Pagination";
import {
  IconButton,
  Button,
  Menu,
  MenuItem,
  Modal,
  Backdrop,
  Fade,
  Collapse,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Paper,
} from "@mui/material";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import swal from "sweetalert";
import * as XLSX from "xlsx";

function Products() {
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [page, setPage] = useState(1);
  const productsPerPage = 3; // Number of products per page
  const [openCollapse, setOpenCollapse] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [page]); // Fetch products whenever page changes

  // Function to toggle collapse state
  const handleCollapseToggle = (productId) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Toggle collapse state for the specified product
    }));
  };

  // Function to open modal and display selected product details
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const deleteProductHandler = (product) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        deleteProduct(product?._id)
          .then(() => {
            const updatedProducts = products.filter(
              (p) => p._id !== product._id
            );
            dispatch(updateProducts(updatedProducts));
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product. Please try again.");
          });
      }
    });
  };

  // Function to filter products by name
  const filteredData = () => {
    return products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Fonction pour exporter les données vers un fichier Excel
  const exportToExcel = () => {
    const filteredProducts = filteredData(); // Récupérer les produits filtrés
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "products.xlsx");
    setAnchorEl(null); // Fermer le menu après l'exportation
  };

  // Fonction pour imprimer les données
  const printData = () => {
    window.print();
    setAnchorEl(null); // Fermer le menu après l'impression
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Calculate start and end indexes of products to be displayed on the current page
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredData().slice(startIndex, endIndex);

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
                    placeholder="Search for products"
                  />
                </div>
              </div>
              <div>
                <button
                  aria-controls="export-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  className="inline-flex py-2 px-3 text-sm text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-4 mb-3"
                >
                  Export
                </button>
                <Menu
                  id="export-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={exportToExcel}>Excel</MenuItem>
                  <MenuItem onClick={printData}>Print</MenuItem>
                </Menu>
                <button
                  className="inline-flex py-2 px-3 ps-9  text-sm text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-4 mb-3"
                  // onClick={handleOpenAddDialog}
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
                  Add new Product
                </button>
              </div>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Price
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
              {displayedProducts.map((product) => (
                <React.Fragment key={product._id}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <img
                        src={product.images[0]}
                        alt={product.productName}
                        className="h-12 w-12"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <div className="flex items-center space-x-2">
                        <span>{product.productName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {product.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex justify-end items-center space-x-3">
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-900 focus:outline-none"
                          onClick={() => handleCollapseToggle(product._id)}
                        >
                          <GrView />
                          <path d="M10 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3m-4 8v4m0-8V6m4 8h3m2-3h-8"></path>
                        </button>
                        <button
                          type="button"
                          className="text-green-600 hover:text-green-900 focus:outline-none"
                          onClick={() => handleOpenEditDialog(product)}
                        >
                          <RiEdit2Fill />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
                        </button>
                        <button
                          type="button"
                          className="text-red-600 hover:text-red-900 focus:outline-none"
                          onClick={() => deleteProductHandler(product)}
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
                    <td colSpan="5">
                      <Collapse
                        in={openCollapse[product._id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {/* <Card>
                          <CardContent>
                            <img src={product.images[0]} alt={product.productName} className="h-40  object-cover" />
                            <Typography gutterBottom variant="h5" component="h2">
                              {product.productName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {product.description}
                            </Typography>
                            <Typography variant="h6" color="textPrimary" component="p">
                              {product.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Date Created: {product.createdAt}
                            </Typography>
                          </CardContent>
                        </Card> */}
                        {/* <Card>
  <CardContent>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={product.images[0]} alt={product.productName} className="h-40  object-cover" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="p">
          {product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Date Created: {product.createdAt}
        </Typography>
      </Grid>
    </Grid>
  </CardContent>
</Card> */}
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Card>
                              <CardContent>
                                <img
                                  src={product.images[0]}
                                  alt={product.productName}
                                  className="h-40  object-cover"
                                />
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Card>
                              <CardContent className="h-40  object-cover">
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="h2"
                                >
                                  {product.productName}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  {product.description}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textPrimary"
                                  component="p"
                                >
                                  {product.price}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  Date Created: {product.createdAt}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-1 px-4">
          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
