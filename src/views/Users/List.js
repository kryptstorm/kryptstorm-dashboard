import React, { Component } from "react";
import ReactTable from "react-table";
import Axios from "axios";
import _ from "lodash";
import QueryString from "query-string";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: [], pages: -1 };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers({ page = 0, pageSize = 20, sorted = [] }, instance) {
    this.setState({ loading: true });
    const _query = QueryString.stringify({
      _page: ++page,
      _limit: pageSize,
      _sort: _.reduce(sorted, (_sort, s) =>
        _.assign(_sort, { [s.id]: s.desc ? -1 : 1 })
      )
    });
    console.log("http://localhost:9999/users?" + _query);
    Axios.get("http://localhost:9999/users?" + _query).then(({ data }) => {
      if (data.errorCode !== "ERROR_NONE") return alert(data.message);
      return this.setState({
        data: data.data.rows,
        pages: data.data.pages,
        loading: false
      });
    });
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
        accessor: "status"
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
            manual
            data={this.state.data}
            pages={this.state.pages}
            columns={columns}
            loading={this.state.loading}
            onFetchData={this.fetchUsers}
            onPageChange={page => console.log(page)}
          />
        </div>
        <div className="box-footer">Footer</div>
      </div>
    );
  }
}

export default UsersList;
