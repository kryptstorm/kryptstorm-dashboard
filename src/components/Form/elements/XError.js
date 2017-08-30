// External modules
import React, { Component } from "react";
import { FormField } from "react-form";
import _ from "lodash";

class XError extends Component {
  render() {
    const name = _.lowerCase(this.props.name);

    return (
      <FormField field={name}>
        {({ getTouched, getError }) => {
          const touch = getTouched();
          const error = getError();
          const hasError = touch && _.isString(error);
          const className = hasError ? "help-block" : "help-block hide";

          return (
            <span className={className}>
              {hasError ? error : ""}
            </span>
          );
        }}
      </FormField>
    );
  }
}

export default XError;
