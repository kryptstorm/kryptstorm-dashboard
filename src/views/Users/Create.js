// External modules
import React, { Component } from "react";
import _ from "lodash";

// Internal modules
import Form, { Text, Password, Select, Button } from "../../components/Form";
import {
  required,
  length,
  range,
  pattern,
  email
} from "../../components/Form/Validators";

// Status
const STATUS_NEW = 0;
const STATUS_ACTIVE = 1;

class UserCreate extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = attributes => console.log(attributes);

  render() {
    const rules = {
      username: [required(), length(3, 254), pattern(/^[\w+.]+$/)],
      email: [required(), email()],
      password: [required(), length(6, 254)],
      status: [required(), range(STATUS_NEW, STATUS_ACTIVE)]
    };

    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Title</h3>
        </div>
        <div className="box-body">
          <Form onSubmit={this.onSubmit} rules={rules}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Text name={"username"} filter={_.lowerCase} />
                <Text name={"email"} filter={_.lowerCase} />
                <Text
                  type={"password"}
                  name={"password"}
                  placeholder={"******"}
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
                  filter={_.upperFirst}
                />
                <Text
                  name={"lastName"}
                  placeholder={"Last Name"}
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
