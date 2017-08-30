// External modules
import React, { Component } from "react";
import { Form } from "react-form";
import _ from "lodash";

// Internal modules
import XText from "./elements/XText";
import XSelect from "./elements/XSelect";

class XForm extends Component {
  constructor(props) {
    super(props);

    this.state = { rules: this.props.rules };
  }

  validate = (values, state, props, instance) => {
    if (!_.isObject(this.state.rules) || _.isEmpty(this.state.rules)) return {};

    const result = _.reduce(
      values,
      (r, v, f) => {
        const rules = this.state.rules[f];
        // Don't have validation rules or the rules have wrong format
        if (!_.isArray(rules) || _.isEmpty(rules)) return r;

        // Stop validation on the first error (error is exist)
        // _.transform callback can return false in order to stop iterating
        r[f] = _.transform(
          rules,
          (e, rule) => {
            const error = rule(v, f);
            if (error) {
              e.push(error);
              return false;
            }
          },
          []
        )[0];

        return r;
      },
      {}
    );
    return result;
  };

  render() {
    return (
      <Form onSubmit={this.props.onSubmit} validate={this.validate}>
        {({ submitForm }) => {
          return <form onSubmit={submitForm}>{this.props.children}</form>;
        }}
      </Form>
    );
  }
}

export default XForm;
export { XText, XSelect };
