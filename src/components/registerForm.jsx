import React from "react";
import Joi from "joi";
import Form from "./common/form";
import * as userService from "../services/userService"; //with this syntax we'll have a userservice object (after the *) in this module and the functions we exported from userServive will be methods in this object(* as userService)
import auth from "../services/authService";

// import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
    apiResponse: "",
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const res = await userService.register(this.state.data);
      console.log(res);
      await auth.loginWithJwt(res.headers["x-auth-token"]);
      window.location = "/";
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          // _id: res.body.id,
          // name: res.body.name,
          // email: res.body.email,
          token: res.headers["x-auth-token"],
        })
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  // callAPI() {
  //   fetch("http://localhost:9000/api/users")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }));
  //   // const res = await userService.getUsers();
  //   // this.setState({ apiResponse: res });
  //
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="spacee">
            {this.renderInput("username", "Username")}
          </div>
          <div className="spacee">
            {this.renderInput("password", "Password", "password")}
          </div>
          <div className="spacee">{this.renderInput("name", "Name")}</div>
          <div className="spaceee">{this.renderButton("Register")} </div>
        </form>
        <div>
          <span>You already have an account?</span>{" "}
          <Link to="/login" style={{ color: "red", fontWeight: "500" }}>
            <span>LOG IN</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
