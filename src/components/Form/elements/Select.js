// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import _ from "lodash";

// Internal modules
import Error from "./Error";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
  }

  select = e => this.setState({ selected: e.target.value });

  render() {
    const name = _.lowerCase(this.props.name);
    const text = _.upperFirst(this.props.name);

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
              <select
                name={name}
                id={name}
                className="form-control"
                value={this.state.selected}
                onChange={this.select}
              >
                {_.map(this.props.data, f =>
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                )}
              </select>
              <Error name={name} />
            </div>
          );
        }}
      </FormField>
    );
  }
}

export default Select;
