// External modules
import React, { Component } from "react";
import { Form, FormField } from "react-form";
import Ladda, { XL, SLIDE_UP } from "react-ladda";
import "ladda/dist/ladda-themeless.min.css";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  toggle = e => this.setState({ loading: !this.state.loading });

  render() {
    return (
      <Ladda
        className={this.props.className}
        loading={this.state.loading}
        onClick={this.toggle}
        data-color="#5cb85c"
        data-spinner-size={30}
        data-spinner-color="#ddd"
      >
        {this.props.children}
      </Ladda>
    );
  }
}

export default Button;
