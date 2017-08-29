// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import _ from "lodash";

// Internal modules
import Text from "./elements/Text";
import Select from "./elements/Select";
import Button from "./elements/Button";

class XForm extends Component {
  validate = (values, state, props, instance) => {
    return {
      username: "Username cannot be blank."
    };
  };

  render() {
    return (
      <Form validate={this.validate}>
        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm} className={"form"}>
              {this.props.children}
            </form>
          );
        }}
      </Form>
    );
  }
}

export default XForm;
export { Text, Select, Button };
