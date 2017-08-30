import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Title</h3>

          <div className="box-tools pull-right">
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="collapse"
              data-toggle="tooltip"
              title="Collapse"
            >
              <i className="fa fa-minus" />
            </button>
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="remove"
              data-toggle="tooltip"
              title="Remove"
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        <div className="box-body">Start creating your amazing application!</div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default Dashboard;
