// External modules
import React, { Component } from "react";
import { FormField } from "react-form";
import _ from "lodash";

// Internal modules
import XError from "./XError";

class XSelect extends Component {
  render() {
    const { name } = this.props;

    // ReactFrom props
    const _name = _.lowerCase(name);
    const _text = _.upperFirst(name);

    return (
      <FormField field={_name}>
        {({ getTouched, getError, getValue, setValue, setTouched }) => {
          const touch = getTouched();
          const error = getError();
          const hasError = touch && _.isString(error);
          const className =
            getTouched() && hasError ? "form-group has-error" : "form-group";

          return (
            <div className={className}>
              <label htmlFor={_name}>{_text}</label>
              <select
                name={_name}
                id={_name}
                className="form-control"
                value={this.props.selected}
                onChange={e => setValue(e.target.value)}
                onBlur={e => setTouched()}
              >
                {_.map(this.props.data, f => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
              <XError name={_name} />
            </div>
          );
        }}
      </FormField>
    );
  }
}

export default XSelect;
