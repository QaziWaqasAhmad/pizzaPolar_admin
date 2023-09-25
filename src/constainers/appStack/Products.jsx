import React, { useRef, useState } from "react";
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  const [modal, setModal] = useState(false);

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
    price:"",
    description:"",
    discount:"",
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


   const addProductss = ()=>{
    
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
                  <TextFeilds label="Discount" size="small"  value={inputValues.category} onChange={(e)=>handleOnChange(e)} name="price" />
                  {options.map((item,index)=>{
                    return(
                      <>
                      {/* main field */}
                      <div className="" >
                      <TextFeilds label="Title" size="small" key={index}/>
                      <div className=" d-flex align-items-center justify-content-end">
                      <span className="mx-end text-primary" onClick={()=> handleOnAdd()}><AddCircleOutlineIcon/></span>
                      <span className="mx-end text-danger" onClick={()=>handleRemove(index)} ><DeleteIcon/></span>


                      </div>
                      {
                        item.subOptions.map((CurElem, salman) =>(
                            <>
                            {/* flavours field */}
                            <div className="d-flex align-items-center justify-content-start ">
                            <TextFeilds label="flavour" size="small" className="w-100  text-end" key={salman}/>
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
                    ></textarea>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Buttons name="Create" />
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
