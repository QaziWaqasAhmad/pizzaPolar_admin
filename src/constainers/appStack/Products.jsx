import React, { useContext, useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavigationDrawer from "../../components/navigationDrawer";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFeilds from "../../components/TextFeilds";
import DeleteIcon from "@mui/icons-material/Delete";
import { addProduct, getAllProducts } from "../../services/products/Products";
import { AppContext } from "../../context";
import Loader from "../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ImageCompressor from 'image-compressor.js';
import axios from "axios";

export default function BasicTable() {
  const { user } = useContext(AppContext);
  const [imageError, setImageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [discountError, setDiscountError] = useState("");
  const [titleError, setTitleError] = useState(""); 
  const [flavorError, setflavorError] = useState("");
  const [descError, setDescError] = useState("");
  const [catError, setCatError] = useState("");
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [options, setOptions] = useState([
    {
      title: "",
      isOpened: false,
      subOptions: [
        {
          name: "",
          isSelected: false,
        },
      ],
    },
  ]);

  const [inputValues, setInputValues] = useState({
    name: "",
    price: 0,
    description: "",
    discount: 0,
    image: "",
    category: "",
  });


   



  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleOnChangeOptions = (e, mainIndex) => {
    const { name, value } = e.target;
    let dummy = [...options];
    dummy[mainIndex].title = value;
    console.log(dummy, "dummmmmmmmmmmmm");
    setOptions(dummy);
  };

  const handleOnChangeSuboptions = (e, mainIndex, subIndex) => {
    const { name, value } = e.target;
    let dummy = [...options];
    dummy[mainIndex].subOptions[subIndex].name = value;
    console.log(dummy, "dummmmmmmmmmmmm");
    setOptions(dummy);
  };
  const fileInputRef = useRef(null);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = () => {
    setIsLoading(true)
    getAllProducts(user.token)
      .then((res) => {
        // console.log(res?.data?.data, "productssssss")
        setIsLoading(false);
        if (res.status === 200) {
          let data = res?.data?.data;
          setProductData(data);
        }
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddProductss = () => {
    const { name, price, description, discount } = inputValues;

    let body = {
      name,
      price,
      description,
      discount,
      category: "Special Offers",
      date: new Date(),
      image:
        "https://admin.broadwaypizza.com.pk/Images/ProductImages/special111111.jpg",
      options: options,
    };
    let hasError = false;

    if (!name.trim()) {
      setNameError("Product name is required");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!price) {
      setPriceError("Price is required");
      hasError = true;
    } else {
      setPriceError("");
    }
    if (!image) {
      setImageError("Image is required");
      hasError = true;
    } else {
      setImageError("");
    }
    if (!category) {
      setCatError("Category is required");
      hasError = true;
    } else {
      setCatError("");
    }

    if (!discount) {
      setDiscountError("Discount is required");
      hasError = true;
    } else {
      setDiscountError("");
    }
    setIsLoading(true)
    addProduct(user.token, body)
      .then((res) => {
        setIsLoading(true)
        if (res.status === 200) {
          getProductsData();
          toggle();
          toast.success("Product added successfully");
        }
      })
      .catch((error) => {
        setIsLoading(true)
        toast.error(error);
      });
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = async(e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageCompressor = new ImageCompressor();
      const compressedImage = await imageCompressor.compress(selectedFile, {
        quality: 0.6, // Adjust the quality as needed (0.6 is just an example)
        maxWidth: 800, // Set the maximum width of the compressed image
        maxHeight: 600, // Set the maximum height of the compressed image
      });
      setIsLoading(true);
      const form = new FormData();
      form.append("image", compressedImage);
      try {
        let res = await axios.post("https://amberstore.pk/upload.php", form);
        // let res = await axios.post("https://pizzafollia.com/upload.php", form);
        if (res.status == 200) {
          setIsLoading(false);
          console.log(res,'urlllllllllllllll');
          setInputValues({
            ...inputValues,
            image:res?.data?.url
          })
        }else{
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  const handleRemove = (index) => {
    let mummy = [...options];
    mummy.splice(index, 1);
    console.log(mummy, "muummdmdmdmdmmd");
    setOptions(mummy);
  };
  const handleRemoveFlavour = (index, subIndex) => {
    let mummy = [...options];
    mummy[index].subOptions.splice(subIndex, 1);
    setOptions(mummy);
  };

  const handleOnAdd = () => {
    const dummy = [...options];
    let obj = {
      title: "",
      isOpened: false,
      subOptions: [
        {
          name: "",
          isSelected: false,
        },
      ],
    };
    dummy.push(obj);
    setOptions(dummy);
  };
  const handleOnAddFlavour = (optionIndex) => {
    const dummy = [...options];
    let obj = {
      name: "",
      isSelected: false,
    };
    dummy[optionIndex].subOptions.push(obj);
    setOptions(dummy);
  };

  const toggle = () => setModal(!modal);
  const updateToggle = () => setUpdateModal(!updateModal);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  return (
    <>
      <NavigationDrawer>
      {isLoading &&
        <Loader isLoading={isLoading} />
      }
        <div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <div className="top-section text-center pt-3 mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className=" d-flex align-items-center gap-1">
                    <HomeIcon />
                    <Link to="/" className="mt-1">
                      Home /{" "}
                    </Link>
                    <span className="  fs-3">Products</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-end">
                    <Buttons name="Add Product" onClick={toggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="add-product-modal ">
            <Modal isOpen={modal} toggle={toggle} className="pt-5 w-100">
              <ModalHeader toggle={toggle}>ADD PRODUCTS</ModalHeader>
              <ModalBody
                className="p-4"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
                <div className="image-section bg-secondary d-flex align-items-center justify-content-center">
                  <i onClick={handleImageUpload}>
                    <CameraAltIcon className="camera-icon" />
                  </i>
                </div>
                {/* Hidden input for file selection */}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  id="image"
                  error={!!imageError}
                  helperText={imageError}
                />

                <div className="text-fields mt-3">
                  <TextFeilds
                    label="Product Name"
                    size="small"
                    value={inputValues.name}
                    onChange={(e) => handleOnChange(e)}
                    name="name"
                    id="name"
                    error={!!nameError}
                    helperText={nameError}
                  />

                  <TextFeilds
                    label="Price"
                    size="small"
                    id="price"
                    error={!!priceError}
                    helperText={priceError}
                    value={inputValues.price}
                    onChange={(e) => handleOnChange(e)}
                    name="price"
                  />
                  <TextFeilds
                    label="Discount"
                    size="small"
                    id="discount"
                    error={!!discountError}
                    helperText={discountError}
                    value={inputValues.discount}
                    onChange={(e) => handleOnChange(e)}
                    name="discount"
                  />
                  {options.map((item, index) => {
                    return (
                      <>
                        {/* main field */}
                        <div className="">
                          <TextFeilds
                            label="Title"
                            size="small"
                            key={index}
                            value={item.title}
                            name="title"
                            onChange={(e) => handleOnChangeOptions(e, index)}
                          />
                          <div className=" d-flex align-items-center justify-content-end">
                            <span
                              className="mx-end text-primary"
                              onClick={() => handleOnAdd()}
                            >
                              <AddCircleOutlineIcon />
                            </span>
                            <span
                              className="mx-end text-danger"
                              onClick={() => handleRemove(index)}
                            >
                              <DeleteIcon />
                            </span>
                          </div>
                          {item.subOptions.map((CurElem, salman) => (
                            <>
                              {/* flavours field */}
                              <div className="d-flex align-items-center justify-content-start ">
                                <TextFeilds
                                  label="flavour"
                                  size="small"
                                  className="w-100  text-end"
                                  key={salman}
                                  name="name"
                                  value={CurElem.name}
                                  onChange={(e) =>
                                    handleOnChangeSuboptions(e, index, salman)
                                  }
                                />
                                <p
                                  className="mx-end text-primary"
                                  onClick={() => handleOnAddFlavour(index)}
                                >
                                  <AddCircleOutlineIcon />
                                </p>
                                <p
                                  className="mx-end text-danger"
                                  onClick={() =>
                                    handleRemoveFlavour(index, salman)
                                  }
                                >
                                  <DeleteIcon />
                                </p>
                              </div>
                            </>
                          ))}
                        </div>
                      </>
                    );
                  })}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={inputValues.category}
                    name="category"
                    onChange={(e) => handleOnChange(e)}
                    id="category"
                    error={!!catError}
                    helperText={catError}
                  >
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="mb-3 mt-3">
                    <textarea
                      class="form-control"
                      id="description"
                      placeholder="Description"
                      rows="3"
                      value={inputValues.description}
                      onChange={(e) => handleOnChange(e)}
                      name="description"
                      error={!!descError}
                      helperText={descError}
                    ></textarea>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div onClick={handleAddProductss}>
                  <Buttons name="Create" />
                </div>
              </ModalFooter>
            </Modal>
          </div>
          

          <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Price</TableCell>
        <TableCell align="center">Discount</TableCell>
        <TableCell align="center">Date</TableCell>
        <TableCell align="center">Category</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Image</TableCell>
        <TableCell align="center">Edit</TableCell>
        <TableCell align="center">Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {productData.map((item, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row" align="center">
            {item.name}
          </TableCell>
          <TableCell align="center">{item.price}</TableCell>
          <TableCell align="center">{item.discount}</TableCell>
          <TableCell align="center">{item.date}</TableCell>
          <TableCell align="center">{item.category}</TableCell>
          <TableCell align="center">{item.isShow}</TableCell>
          <TableCell align="center">
            <div className="products_images ">
              <Link to={item.image} target="_blank"> 
              <img
                src={item.image}
                alt="product image"
                className="img-fluid  rounded-circle"
              />
              </Link>
            </div>
          </TableCell>
          <TableCell align="center">
            <div className="text-success edit-product " onClick={updateToggle}>
              <BorderColorIcon />
            </div>
          </TableCell>
          <TableCell align="center">
            <div className="text-danger edit-product" onClick={deleteToggle}>
              <DeleteIcon />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
 
          <div className="add-product-modal ">
            <Modal isOpen={updateModal} toggle={updateToggle} className="pt-5 w-100">
              <ModalHeader toggle={updateToggle}>UPDATE PRODUCTS</ModalHeader>
              <ModalBody
                className="p-4"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
                <div className="image-section bg-secondary d-flex align-items-center justify-content-center">
                  <i onClick={handleImageUpload}>
                    <CameraAltIcon className="camera-icon" />
                  </i>
                </div>
                {/* Hidden input for file selection */}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  id="image"
                  error={!!imageError}
                  helperText={imageError}
                />

                <div className="text-fields mt-3">
                  <TextFeilds
                    label="Product Name"
                    size="small"
                    value={inputValues.name}
                    onChange={(e) => handleOnChange(e)}
                    name="name"
                    id="name"
                    error={!!nameError}
                    helperText={nameError}
                  />

                  <TextFeilds
                    label="Price"
                    size="small"
                    id="price"
                    error={!!priceError}
                    helperText={priceError}
                    value={inputValues.price}
                    onChange={(e) => handleOnChange(e)}
                    name="price"
                  />
                  <TextFeilds
                    label="Discount"
                    size="small"
                    id="discount"
                    error={!!discountError}
                    helperText={discountError}
                    value={inputValues.discount}
                    onChange={(e) => handleOnChange(e)}
                    name="discount"
                  />
                  {options.map((item, index) => {
                    return (
                      <>
                        {/* main field */}
                        <div className="">
                          <TextFeilds
                            label="Title"
                            size="small"
                            key={index}
                            value={item.title}
                            name="title"
                            onChange={(e) => handleOnChangeOptions(e, index)}
                          />
                          <div className=" d-flex align-items-center justify-content-end">
                            <span
                              className="mx-end text-primary"
                              onClick={() => handleOnAdd()}
                            >
                              <AddCircleOutlineIcon />
                            </span>
                            <span
                              className="mx-end text-danger"
                              onClick={() => handleRemove(index)}
                            >
                              <DeleteIcon />
                            </span>
                          </div>
                          {item.subOptions.map((CurElem, salman) => (
                            <>
                              {/* flavours field */}
                              <div className="d-flex align-items-center justify-content-start ">
                                <TextFeilds
                                  label="flavour"
                                  size="small"
                                  className="w-100  text-end"
                                  key={salman}
                                  name="name"
                                  value={CurElem.name}
                                  onChange={(e) =>
                                    handleOnChangeSuboptions(e, index, salman)
                                  }
                                />
                                <p
                                  className="mx-end text-primary"
                                  onClick={() => handleOnAddFlavour(index)}
                                >
                                  <AddCircleOutlineIcon />
                                </p>
                                <p
                                  className="mx-end text-danger"
                                  onClick={() =>
                                    handleRemoveFlavour(index, salman)
                                  }
                                >
                                  <DeleteIcon />
                                </p>
                              </div>
                            </>
                          ))}
                        </div>
                      </>
                    );
                  })}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={inputValues.category}
                    name="category"
                    onChange={(e) => handleOnChange(e)}
                    id="category"
                    error={!!catError}
                    helperText={catError}
                  >
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="mb-3 mt-3">
                    <textarea
                      class="form-control"
                      id="description"
                      placeholder="Description"
                      rows="3"
                      value={inputValues.description}
                      onChange={(e) => handleOnChange(e)}
                      name="description"
                      error={!!descError}
                      helperText={descError}
                    ></textarea>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div onClick={handleAddProductss}>
                  <Buttons name="Update" />
                </div>
              </ModalFooter>
            </Modal>
          </div> 
          
        </div>
      </NavigationDrawer>
    </>
  );
}
