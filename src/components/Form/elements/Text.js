// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import _ from "lodash";

// Internal modules
import Error from "./Error";

class Text extends Component {
  render() {
    const name = _.lowerCase(this.props.name);
    const text = _.upperFirst(this.props.name);
    const placeholder = this.props.placeholder || text;

    return (
      <FormField field={name}>
        {({ getTouched, getError }) => {
          const touch = getTouched();
          const error = getError();
          const hasError = touch && _.isString(error);
          const className =
            getTouched() && hasError ? "form-group has-error" : "form-group";

          return (
            <div className={className}>
              <label htmlFor={name}>
                {text}
              </label>
              <input
                type={this.props.type || "text"}
                name={name}
                id={name}
                className="form-control"
                placeholder={placeholder}
              />
              <Error name={name} />
            </div>
          );
        }}
      </FormField>
    );
  }
}

export default Text;
