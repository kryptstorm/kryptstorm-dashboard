// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import _ from "lodash";

// Internal modules
import Error from "./Error";

class Text extends Component {
  render() {
    const { name, type, placeholder, filter } = this.props;

    // ReactFrom props
    const _type = type || "text";
    const _name = _.lowerCase(name);
    const _text = _.upperFirst(name);
    const _placeholder = placeholder || _text;

    // Kryptstorm custom props
    const _filter = _.isFunction(filter) ? filter : v => v;

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
              <label htmlFor={_name}>
                {_text}
              </label>
              <input
                type={_type}
                name={_name}
                id={_name}
                className="form-control"
                placeholder={_placeholder}
                value={getValue("")}
                onChange={e => setValue(_filter(e.target.value))}
                onBlur={e => setTouched()}
              />
              <Error name={_name} />
            </div>
          );
        }}
      </FormField>
    );
  }
}

export default Text;
