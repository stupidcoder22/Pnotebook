import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ showAlert }) => {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = userdata;

    const response = await fetch("http://localhost:1000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //redirect to home page
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      showAlert("Successfully Created Your Account", "success");
    } else {
      showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-80 p-5">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={onChange}
                            value={userdata.name}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={onChange}
                            value={userdata.email}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            onChange={onChange}
                            value={userdata.password}
                            minLength={5}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="repassword"
                            id="repassword"
                            className="form-control"
                            onChange={onChange}
                            value={userdata.repassword}
                            minLength={5}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?t=st=1648111672~exp=1648112272~hmac=c1fddece85731c6f53bdf588f64f8e1f323f40a7360ec3304d2a040d8b6f33e2&w=996"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
