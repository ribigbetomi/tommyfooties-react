import React from "react";
import Joi from "joi";
import Form from "./common/form";
import auth from "../services/authService";

class LogIn extends Form {
  state = {
    data: {
      username: "",
      password: "",
      // name: ""
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    // name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      //   const response = await userService.register(this.state.data);
      //   console.log(response);

      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/cart";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  // componentDidMount() {
  //   if (user) {
  //     <Redirect to="/cart" />;
  //   }
  // }
  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="login">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="spacee">
            {this.renderInput("username", "Username")}
          </div>
          <div className="spacee">
            {this.renderInput("password", "Password", "password")}{" "}
          </div>
          {/* <div className="spacee">{this.renderInput("name", "Name")} </div> */}
          <div className="spaceee">{this.renderButton("Log In")}</div>
        </form>
      </div>
    );
  }
}

export default LogIn;
