import "./auth.css";
import logo from "../../assets/about us.jpg";
const Login = () => {
  return (
    <>
        <div className="container-fluid h-100">
        <div className="row vh-100">
          {/* <!-- Left Container with Yellow Background --> */}
          <div className="backGround col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-50 p-3 align-items-center justify-content-center">
              <img src={logo} alt="Logo" className="w-50 p-3 align-items-center justify-content-center" />
              <h2> PIZZA POLAR</h2>
            </div>
          </div>

          {/* <!-- Right Container with Input Fields --> */}
          <div className="col-md-6 d-flex align-items-center justify-content-center h-100">
            <div className="container">
              <div className="text-center ">
                <h2>Pizza Polar</h2>
              </div>
              {/* <!-- Content for the right container goes here --> */}

              <div 
              className="w-50 mx-auto mt-4"
              // className="col-md-7 col-lg-5 col-xl-5 offset-xl-1"
              >
                <form>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block rounded-pill w-100"
                  >
                    Sign in
                  </button>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 ">
                      can't access your account?<a href="#!">Recover Account</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


