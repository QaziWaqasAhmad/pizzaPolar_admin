import React, { useContext, useEffect, useState } from 'react'
import NavigationDrawer from '../../components/navigationDrawer'
import Loader from '../../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { addCategory, deleteCategories, editCategory, getCategory } from '../../services/products/Products';
import { AppContext } from '../../context';
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TextFeilds from '../../components/TextFeilds';
import swal from 'sweetalert';
import { Pagination } from 'antd';




const Categories = () => {
    const { user } = useContext(AppContext); 
    const [categoryData, setCategoryData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [updateModal, setUpdateModal] = useState(false) 
    const [selectedProductId, setSelectedProductId] = useState(null) 
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const [totalItems, setTotalItems] = useState(0);
    // console.log(iden, "idddddddddddd")

    const [inputValue, setInputValue] = useState({
        name : ""
    });

    const handleInputChange = (e) =>{
     const {name, value} = e.target;
     setInputValue({
        ...inputValue,
        [name]: value
     })
    }
     const [modal, setModal] = useState(false);
     const toggle = () => {
        setModal(!modal)
     }
     


useEffect(()=>{
    gellCategories()
},[currentPage])
    const gellCategories = () =>{
        setIsLoading(true)
        getCategory(user.token, currentPage).then((res)=>{ 
            if(res.status === 200) {
                let data = res.data.data
                setCategoryData(data)
                setCurrentPage(getResponse.data.data.currentPage);
            setTotalPages(getResponse.data.data.totalPages);
            setTotalItems(getResponse.data.data.totalItems);
                setIsLoading(false)
            }
        }).catch((error)=>{
            toast.error(error)
            setIsLoading(false)
        })
    }


    const addCategories = () => {
        let body = {
            name:inputValue.name
        }
        addCategory(user.token, body).then((res) => {
            if(res.status === 200) {
                gellCategories();
                toggle()
                toast.success("Category added successfully")
            }
        }).catch((error) =>{
            toast.error(error)
        })
    }


    const updateCategories = () => {
        let body = {
            _id:selectedProductId,
            name : inputValue.name
        }
        editCategory(user.token,body,selectedProductId).then((res) =>{
          if(res.status === 200){
            gellCategories()
            update() 
            toast.success("Category updated successfully")
          }
        }).catch((error) =>{
            toast.error("error", error)
        })
    }

    const categoryDelete = (id) => {
      deleteCategories(user.token,id).then((res)=>{
         if(res.status === 200) {
          toast.success("Category deleted successfully")
          gellCategories()
         }
      }).catch((error) =>{
        toast.error(error , "error")
      })
    }

const deletcat = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning", 
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      categoryDelete(id);
    } else {
      swal("Your Category is safe!");
    }
  })
}


    const update = (productId) => {
        setSelectedProductId(productId)
        setUpdateModal(!updateModal)
    }
    

    
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
                    <span className=" fs-3">Category</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-end">
                    <Buttons name="Add Category" onClick={toggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="add-product-modal ">
            <Modal isOpen={modal} toggle={toggle} className="pt-5 w-100">
              <ModalHeader toggle={toggle}>ADD CATEGORY</ModalHeader>
              <ModalBody
                className="p-4"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
              <div className="inputs">
              {/* <Label className='text-muted'>Category Name:</Label> */}
              <TextFeilds 
              label="Category Name" 
              name="name"  
              size="small"
               value={inputValue.name}
               onChange={(e)=>handleInputChange(e)}
              /> 
              </div>
              </ModalBody>
              <ModalFooter>
                <div onClick={addCategories}>
                  <Buttons name="Create" />
                </div>
              </ModalFooter>
            </Modal>
          </div>


          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='col-md-10'>Category</TableCell> 
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>  */}
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryData.length === 0 ? (
            <p className='text-center'>Data Not Found</p>
          ):(
            categoryData.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
              <div className="text-success edit-product " onClick={()=>update(item._id)}>
              <BorderColorIcon />
            </div>
              </TableCell> 
              <TableCell align="right">
              <div className="text-danger edit-product" onClick={()=>deletcat(item._id)}>  
              <DeleteIcon />
            </div>
              </TableCell>
            </TableRow>
          ))
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination
    className="pagination"
    total={totalItems} // Use totalItems instead of totalPage
    current={currentPage}
    onChange={(page) => {
        setCurrentPage(page); 
    }}
/>
        </div>
        <div className="add-product-modal ">
            <Modal isOpen={updateModal} toggle={update} className="pt-5 w-100">
              <ModalHeader toggle={update}>UPDATE CATEGORY</ModalHeader>
              <ModalBody
                className="p-4"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
              <div className="inputs">
              {/* <Label className='text-muted'>Category Name:</Label> */}
              <TextFeilds 
              label="Category Name" 
              name="name"  
              size="small"
               value={inputValue.name}
               onChange={(e)=>handleInputChange(e)}
              /> 
              </div>
              </ModalBody>
              <ModalFooter>
                <div onClick={updateCategories}>
                  <Buttons name="Update" />
                </div>
              </ModalFooter>
            </Modal>
          </div>
      </NavigationDrawer>  
    </>
  )
}

export default Categories
