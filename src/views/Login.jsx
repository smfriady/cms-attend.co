import { Form, Button } from "react-bootstrap";
import loginLogo from "../assets/login.png";

const Login = () => {
  return (
    <>
      <div className="login-section vh-90 mt-5">
        <div className="container-fluid h-custom pt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="pb-4">
                <h2 style={{color: "#444655"}}>
                  <span style={{color: "#3e5ba6"}}>Attend.co</span> Admin Site.
                </h2>
              </div>
              <Form>
                <div className="form-outline mb-4">
                  <label className="form-label" style={{color: "#3e5ba6"}}>Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" style={{color: "#3e5ba6"}}>Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-3 pt-2">
                  <Button variant="primary px-4" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
            <div className="image-login col-md-9 col-lg-6 col-xl-5">
              <img src={loginLogo} className="img-fluid" alt="login-page" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
