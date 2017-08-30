// External modules
import React, { Component } from "react";
import _ from "lodash";

// Internal modules
import XForm, { XText, XSelect } from "../../components/Form";
import {
  required,
  length,
  inValues,
  pattern,
  email
} from "../../components/Form/Validators";

// Status
const STATUS_NEW = 0;
const STATUS_ACTIVE = 1;

class UserCreate extends Component {
  onSubmit = values => console.log(values);

  render() {
    const rules = {
      username: [required(), length(3, 254), pattern(/^[\w+.]+$/)],
      email: [required(), email()],
      password: [required(), length(6, 254)],
      status: [required(), inValues(STATUS_NEW, STATUS_ACTIVE)],
      firstName: [pattern(/^[\w+ -]+$/)],
      lastName: [pattern(/^[\w+ -]+$/)]
    };

    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Title</h3>
        </div>
        <div className="box-body">
          <XForm onSubmit={this.onSubmit} rules={rules}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <XText name={"username"} />
                <XText name={"email"} />
                <XText
                  type={"password"}
                  name={"password"}
                  placeholder={"******"}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <XSelect
                  name={"status"}
                  selected={STATUS_ACTIVE}
                  data={[
                    { label: "New", value: STATUS_NEW },
                    { label: "Active", value: STATUS_ACTIVE }
                  ]}
                />
                <XText name={"firstName"} placeholder={"First Name"} />
                <XText name={"lastName"} placeholder={"Last Name"} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </XForm>
        </div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default UserCreate;
