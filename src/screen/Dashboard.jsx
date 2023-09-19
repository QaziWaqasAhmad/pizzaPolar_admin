import React from 'react'

const DashBoard = () => {
  return (
    <>
    <div className='container-fluid px-4'>
<div className="row g-3 my-2">
 <div className='col-md-3'>
 <div className="p-3 bf-white shadow-sm d-flex justify-content-around align-items-center rounded">
    <div>
    <p className="fs-5">Ecommerce</p>
      <h3 className="fs-2">$20</h3>
      <p className="fs-5">-12.8%</p>
    </div>
   
  </div>
 </div>

 <div className='col-md-3'>
 <div className="p-3 bf-white shadow-sm d-flex justify-content-around align-items-center rounded">
    <div>
      
      <p className="fs-5">New Customer</p>
      <h3 className="fs-2">894</h3>
      <p className="fs-5">72.4%</p>
    </div>
  </div>
 </div>

 <div className='col-md-3'>
 <div className="p-3 bf-white shadow-sm d-flex justify-content-around align-items-center rounded">
    <div>
    <p className="fs-5">Ecommerce</p>
      <h3 className="fs-2">56.23%</h3>
      <p className="fs-5">24.8%</p>
    </div>
  </div>
 </div>

 <div className='col-md-3'>
 <div className="p-3 bf-white shadow-sm d-flex justify-content-around align-items-center rounded">
    <div>
    <p className="fs-5">Purchase</p>
      <h3 className="fs-2">$1050.12</h3>
      <p className="fs-5">14.2%</p>
    </div>
  </div>
 </div>

</div>
    </div>

    <div className='row my-5'>
<h3 className='fs-4 mb-3'> Revenue and Conversation Rate</h3>
<div className="graphBox">
  <div className="box"></div>
  <div className="box"></div>
</div>
    </div>
    </>
  )
}

export default DashBoard
