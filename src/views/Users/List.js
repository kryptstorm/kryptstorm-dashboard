// External modules
import React, { Component } from "react";
import ReactTable from "react-table";

// Internal modules
import KryptstormReact from "./kryptstorm-react";
import Status from "../../components/Status";

const UsersService = new KryptstormReact({
  endpoint: "http://localhost:9999/users"
});

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: [], pages: -1 };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers(args, instance) {
    this.setState({ loading: true });
    UsersService.search(
      args
    ).then(
      ({
        errorCode = "ERROR_NONE",
        data = {},
        message = "An error has been encountered"
      }) => {
        if (errorCode !== "ERROR_NONE") return alert(message);

        return this.setState({
          data: data.rows,
          pages: data.pages,
          loading: false
        });
      }
    );
  }

  render() {
    const columns = [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Status",
        accessor: "status",
        className: "text-center",
        Cell: ({ value }) => <Status status={value} />,
        Filter: ({ filter, onChange }) =>
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          >
            <option value="all">Show All</option>
            <option value="true">Can Drink</option>
            <option value="false">Can't Drink</option>
          </select>
      },
      {
        Header: "Creation Datetime",
        accessor: "createdAt"
      },
      {
        Header: "Last update",
        accessor: "updatedAt"
      }
    ];

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
          <ReactTable
            className="-striped"
            manual
            filterable
            data={this.state.data}
            pages={this.state.pages}
            columns={columns}
            loading={this.state.loading}
            onFetchData={this.fetchUsers}
          />
        </div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default UsersList;
