import React from "react";
import NavigationDrawer from "../../components/navigationDrawer/index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CardsChart from "../../components/CardsChart";
import ProductsChart from "../../components/ProductsChart";
// import BasicTable from "../../components/Tables";


const Home = () => {
  return ( 
    <>
      <NavigationDrawer>
        <div className="">
          <div className="card-container  d-flex align-items-center justify-content-center gap-5 flex-wrap">
            <Card className="card p-2">
              <div className="card-data ">
                <i>
                  <CalendarMonthIcon className="text-dark  mb-3 mt-2" />
                </i>
                <div className="card-content text-white">
                  <h5 className="">Orders Volume</h5>
                  <h1 className="text-light fw-bolder">-300</h1>
                </div>
              </div>
            </Card>
            <Card className="card p-2">
              <div className="card-data ">
                <i>
                  <ProductionQuantityLimitsIcon className="text-dark mb-3 mt-2" />
                </i>
                <div className="card-content text-white">
                  <h5 className="">Production Volume</h5>
                  <h1 className="text-light fw-bolder">-1700</h1>
                </div>
              </div>
            </Card>
            <Card className="card p-2">
              <div className="card-data ">
                <i>
                  <TrendingDownIcon className="text-dark  mb-3 mt-2" />
                </i>
                <div className="card-content text-white">
                  <h5 className="">Sales Revenue</h5>
                  <h1 className="text-light fw-bolder">-1200</h1>
                </div>
              </div>
            </Card>
          </div>


          <div className="line-chart">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <CardsChart/>    
                    </div>
                    <div className="col-md-6">
                        <ProductsChart/>
                    </div>
                </div>
            </div>
            
          </div>


          <div className="table">
          {/* <BasicTable/> */}
          </div>
        </div>
      </NavigationDrawer>
    </>
  );
};

export default Home;
