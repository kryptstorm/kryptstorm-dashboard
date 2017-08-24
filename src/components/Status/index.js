import React, { Component } from "react";

const STATUS_INACTIVE = 0;
const STATUS_ACTIVE = 1;
const STATUS_LCOKED = 2;

export default class Status extends Component {
  render() {
    if (this.props.status === STATUS_INACTIVE) {
      return (
        <span className="text-navy">
          <i className="fa fa-fw fa-lg fa-times-circle-o" />
        </span>
      );
    }

    if (this.props.status === STATUS_ACTIVE) {
      return (
        <span className="text-success">
          <i className="fa fa-fw fa-lg fa-check-circle-o" />
        </span>
      );
    }

    if (this.props.status === STATUS_LCOKED) {
      return (
        <span className="text-danger">
          <i className="fa fa-fw fa-lg fa-lock" />
        </span>
      );
    }

    return "";
  }
}
