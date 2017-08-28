// External modules
import React, { Component } from "react";
import _ from "lodash";

// Internal modules
import Form, { Text, Password, Select, Button } from "../../components/Form";

// Status
const STATUS_NEW = 0;
const STATUS_ACTIVE = 1;

class UserCreate extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = attributes => {};

  render() {
    const rules = {
      required: ["username", "email", "password", "status"],
      properties: {
        username: { type: "string", minLength: 3, maxLength: 255 },
        email: { format: "email" },
        password: { type: "string", minLength: 3, maxLength: 255 },
        status: {
          type: "number",
          enum: [STATUS_NEW, STATUS_ACTIVE]
        },
        firstName: { type: "string", maxLength: 255 },
        lastName: { type: "string", maxLength: 255 }
      }
    };

    return (
      <div className="box box-primary">
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
        <div className="box-body">
          <Form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Text
                  name={"username"}
                  required
                  minLength={3}
                  maxLength={254}
                  pattern={/^[\w+.]+$/}
                  filter={_.lowerCase}
                />
                <Text
                  name={"email"}
                  required
                  format={"email"}
                  filter={_.lowerCase}
                />
                <Text
                  type={"password"}
                  name={"password"}
                  placeholder={"******"}
                  required
                  minLength={6}
                  maxLength={254}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Select
                  name={"status"}
                  selected={STATUS_ACTIVE}
                  data={[
                    { label: "New", value: STATUS_NEW },
                    { label: "Active", value: STATUS_ACTIVE }
                  ]}
                />
                <Text
                  name={"firstName"}
                  placeholder={"First Name"}
                  minLength={3}
                  maxLength={254}
                  pattern={/^[\w+.]+$/}
                  filter={_.upperFirst}
                />
                <Text
                  name={"lastName"}
                  placeholder={"Last Name"}
                  minLength={3}
                  maxLength={254}
                  pattern={/^[\w+.]+$/}
                  filter={_.upperFirst}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <Button className={"btn btn-primary"}>Create</Button>
              </div>
            </div>
          </Form>
        </div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default UserCreate;
