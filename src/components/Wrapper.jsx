import "./wrapper.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
const Wrapper = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap bg-dark">
          <div className="bg-dark col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
            <div className="bg-dark p-2">
              <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
                <span className="fs-4 d-none d-sm-inline">sideMenu</span>
              </a>
              <ul className="nav nav-pills flex-column mt-4">
                <li className="nav-item py-2 py-sm-0">
                  <a href="#" className="nav-link text-white d-flex align-items-center">
                    <DashboardIcon/>
                    <span className="fs-4 ms-3 d-none d-sm-inline">DashBoard</span>
                    </a>
                </li>

                <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white d-flex align-items-center">
                  <HomeIcon />
                    <i className="fa-solid fa-house"></i><span className="fs-4 ms-3 d-none d-sm-inline">Home</span>
                    </a>
                </li>

                <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white d-flex align-items-center">
                  <AccountBalanceIcon />
                    <i className="fs-5 fa fa-table-list"></i><span className="fs-4 ms-3 d-none d-sm-inline">Account</span>
                    </a>
                </li>

                <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white d-flex align-items-center">
                  <SettingsApplicationsSharpIcon />
                    <i className="fs-5 fa fa-table-list"></i><span className="fs-4 ms-3 d-none d-sm-inline">Setting</span>
                    </a>
                </li>

                <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                    <i className="fs-5 fa fa-clipboard"></i><span className="fs-4 ms-3 d-none d-sm-inline">Orders</span>
                    </a>
                </li>

                <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                    <i className="fs-5 fa fa-users"></i><span className="fs-4 ms-3 d-none d-sm-inline">Customers</span>
                    </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;

{/* <div className="dropdown open p-3">
  <button className="btn border-none dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="data" aria-expanded="false">
    <i className="fa fa-user"></i><span className="ms-2">User</span>
  </button>
  <div className="dropdown-menu" aria-labelledby="triggerId">
<button className="dropdown-item" href="#">Setting</button>
<button className="dropdown-item" href="#">Setting</button>
  </div>
</div> */}