import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import loginLogo from "../assets/login.png";
import { loginUser } from "../stores/actions/auth";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(loginUser(formLogin))
      .then((data) => {
        setIsLoading(false);
        toast.success(`${data.email} success logged in.`);
        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      })
      .catch(({ message }) => {
        setIsLoading(false);
        toast.error(message);
      });
  };

  return (
    <>
      <div className="login-section vh-90 mt-5">
        <div className="container-fluid h-custom pt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="pb-4">
                <h2 style={{ color: "#444655" }}>
                  <span style={{ color: "#3e5ba6" }}>Attend.co</span> Admin Site.
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" style={{ color: "#3e5ba6" }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    name="email"
                    value={formLogin.email}
                    onChange={handleOnChange}
                    autoComplete="off"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" style={{ color: "#3e5ba6" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={formLogin.password}
                    onChange={handleOnChange}
                    autoComplete="off"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-3 pt-2">
                  <button className="btn btn-primary px-4" type="submit" disabled={isLoading}>
                    Login
                  </button>
                </div>
              </form>
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
