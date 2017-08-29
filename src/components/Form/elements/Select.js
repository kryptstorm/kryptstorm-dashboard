// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import _ from "lodash";

// Internal modules
import Error from "./Error";

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, type, filter } = this.props;

    // ReactFrom props
    const _name = _.lowerCase(name);
    const _text = _.upperFirst(name);

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
              <select
                name={_name}
                id={_name}
                className="form-control"
                value={this.props.selected}
                onChange={e => setValue(_filter(e.target.value))}
                onBlur={e => setTouched()}
              >
                {_.map(this.props.data, f =>
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                )}
              </select>
              <Error name={_name} />
            </div>
          );
        }}
      </FormField>
    );
  }
}

export default Select;
