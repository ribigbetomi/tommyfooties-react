import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Select from "../select";
import { FaArrowRight } from "react-icons/fa";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false }; //once the joi sees an error, by default it aborts early and doesn't continue to sight other errors, hence the false to not abort early
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // now we want to map the error message logged in the console by the joi into the error object

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message; //this is how to map an array into an object (we can also use the map and reduce methods)
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema); //we dont set abortEarly to false here cos we dont want it to log all the errors at once, hence abort after every single error
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //we dont want to post this form to the server everytime we type an input, hence preventDefault

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate} className="btn btn-primary">
        <h3
          style={{
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "10px",
          }}
        >
          {label} <FaArrowRight style={{ transform: "translateY(3px)" }} />
        </h3>
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
