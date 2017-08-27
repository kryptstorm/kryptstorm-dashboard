// External modules
import React, { Component } from "react";
import ReactTable from "react-table";
import Moment from "moment";
import _ from "lodash";

// Internal modules
import KryptstormClient from "./kryptstorm-client";
import Status from "../../components/Status";
import Confirm from "../../components/Confirm";

const UsersService = new KryptstormClient({
  endpoint: "http://localhost:9999/users"
});

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: [], pages: -1, _query: {} };
  }

  search = (args, instance) => {
    this.setState({ _query: args });
    this.setState({ loading: true });
    UsersService.search(args)
      .then(
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
      )
      .catch(err => alert(err.message));
  };

  remove = args => {
    UsersService.remove(args)
      .then(
        ({
          errorCode = "ERROR_NONE",
          data = {},
          message = "An error has been encountered"
        }) => {
          if (errorCode !== "ERROR_NONE") return alert(message);

          return this.search(this.state._query);
        }
      )
      .catch(err => alert(err.message));
  };

  render() {
    const columns = [
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email",
        minWidth: 150
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
            value={filter ? filter.value : ""}
          >
            <option>--- Show All ---</option>
            <option value={0}>Inactive</option>
            <option value={1}>Active</option>
            <option value={2}>Locked</option>
          </select>,
        minWidth: 70,
        sortable: false
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        className: "text-center",
        Cell: ({ value }) => Moment(value).format("YYYY-MM-DD")
      },
      {
        Header: "Updated At",
        accessor: "updatedAt",
        className: "text-center",
        Cell: ({ value }) => Moment(value).format("YYYY-MM-DD")
      },
      {
        Header: "Action",
        accessor: "id",
        className: "text-center",
        Cell: args =>
          <div className="item-actions">
            <i className="fa fa-lg fa-fw fa-pencil-square-o" />
            <Confirm
              triggerElement={
                <i className="fa fa-lg fa-fw fa-trash-o text-danger" />
              }
              title={"Delete Confirm"}
              content={
                <p className="text-danger text-center">
                  Do you want to delete user: {args.row.firstName}{" "}
                  {args.row.lastName}?
                </p>
              }
              onYes={this.remove}
              data={_.assign({}, args, { id: args.value })}
            />
          </div>,
        filterable: false,
        sortable: false
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
            className="-striped -highlight"
            manual
            filterable
            data={this.state.data}
            pages={this.state.pages}
            columns={columns}
            loading={this.state.loading}
            onFetchData={this.search}
            defaultSorted={[
              {
                id: "createdAt",
                desc: true
              }
            ]}
            defaultFiltered={[
              {
                id: "status",
                value: 1
              }
            ]}
            defaultPageSize={50}
          />
        </div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default UsersList;
