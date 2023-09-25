import React, { useContext, useRef, useState } from "react";
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextFeilds from "../../components/TextFeilds";
import DeleteIcon from '@mui/icons-material/Delete';
import { addProduct } from "../../services/products/Products";
import { AppContext } from "../../context";





export default function BasicTable() {
  const {user, login} = useContext(AppContext)
console.log(user.token, 'sadasdasdasdasda')

  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [options,setOptions]=useState([
    {
      title:"",
      isOpened:false,
      subOptions:[
        {
          name:"",
          isSelected:false
        }
      ]
    }
  ])


  const [inputValues,setInputValues]=useState({
    name:"",
    price:0,
    description:"",
    discount:0,
    image:"",
    category:""

  })

  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setInputValues({
      ...inputValues,
      [name]:value
    })
  }

  const handleOnChangeOptions=(e,mainIndex)=>{
    const {name,value}=e.target
    let dummy=[...options]
    dummy[mainIndex].title = value;
    console.log(dummy,"dummmmmmmmmmmmm");
    setOptions(dummy)

  }


  const handleOnChangeSuboptions=(e,mainIndex,subIndex)=>{
    const {name,value}=e.target
    let dummy=[...options]
    dummy[mainIndex].subOptions[subIndex].namess = value;
    console.log(dummy,"dummmmmmmmmmmmm");
    setOptions(dummy)

  } 
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // You can handle the selected file here (e.g., upload it to a server)
      console.log('Selected file:', selectedFile);
    }
  };


   const handleAddProductss = ()=>{
    const {name,price,description,discount}=inputValues
      let body={
          name,
          price,
          description,
          discount,
          category:"Special Offers",
          date : new Date(),
          image:"https://admin.broadwaypizza.com.pk/Images/ProductImages/special111111.jpg",
          options:options
      }
      setIsLoading(true)
      addProduct(user.token,body).then((res) => {
        if(res.status === 200){
          setIsLoading(false)
          toggle()

        }else{
          setIsLoading(false)
        }
      }).catch((error) =>{
        console.log(error);
        setIsLoading(false)
      })

   }






  
const handleRemove = (index) => {
  let mummy = [...options]
  mummy.splice(index,1)
  console.log(mummy,"muummdmdmdmdmmd");
  setOptions(mummy)
}
const handleRemoveFlavour = (index, subIndex) => {
  let mummy = [...options]
  mummy[index].subOptions.splice(subIndex, 1)
  setOptions(mummy)
}


  const handleOnAdd=()=>{
    const dummy=[...options]
    let obj= {
      title:"",
      isOpened:false,
      subOptions:[
        {
          name:"",
          isSelected:false
        }
      ]
    }
    dummy.push(obj)
    setOptions(dummy)
  }
  const handleOnAddFlavour=(optionIndex)=>{
    const dummy=[...options]
    let obj= {
              name:"",
              isSelected:false
    }
    dummy[optionIndex].subOptions.push(obj)
    setOptions(dummy)
  }

  const toggle = () => setModal(!modal);

  return (
    <>
      <NavigationDrawer>
        <div>
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
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    
                <div className="text-fields mt-3">
                  <TextFeilds label="Product Name" size="small" value={inputValues.name} onChange={(e)=>handleOnChange(e)} name="name"/>
                  <TextFeilds label="Price" size="small" value={inputValues.price} onChange={(e)=>handleOnChange(e)} name="price"/>
                  <TextFeilds label="Discount" size="small"  value={inputValues.discount} onChange={(e)=>handleOnChange(e)} name="discount" />
                  {options.map((item,index)=>{
                    return(
                      <>
                      {/* main field */}
                      <div className="" >
                      <TextFeilds label="Title" size="small" key={index} value={item.title} name="title" onChange={(e)=>handleOnChangeOptions(e,index)}/>
                      <div className=" d-flex align-items-center justify-content-end">
                      <span className="mx-end text-primary" onClick={()=> handleOnAdd()}><AddCircleOutlineIcon/></span>
                      <span className="mx-end text-danger" onClick={()=>handleRemove(index)} ><DeleteIcon/></span>


                      </div>
                      {
                        item.subOptions.map((CurElem, salman) =>(
                            <>
                            {/* flavours field */}
                            <div className="d-flex align-items-center justify-content-start ">
                            <TextFeilds label="flavour" size="small" className="w-100  text-end" key={salman} name="name" value={CurElem.name} onChange={(e)=>handleOnChangeSuboptions(e,index,salman)}/>
                      <p className="mx-end text-primary" onClick={()=> handleOnAddFlavour(index)}><AddCircleOutlineIcon/></p>
                            <p className="mx-end text-danger" onClick={()=>handleRemoveFlavour(index, salman)}><DeleteIcon/></p>
                            </div>

                            </>
                        )
                          
                        )
                      }
                      </div>
                    </>
                    )
                  })}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={inputValues.category}
                    name="category"
                    onChange={(e)=>handleOnChange(e)}
                    >
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="mb-3 mt-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Description"
                      rows="3"
                      value={inputValues.description} 
                      onChange={(e)=>handleOnChange(e)} 
                      name="description"
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
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </NavigationDrawer>
    </>
  );
}
