import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainHeader from "../../components/MainHeader";
import MainSidebar from "../../components/MainSidebar";
import MainFooter from "../../components/MainFooter";
import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";

import Dashboard from "../../views/Dashboard";
import UsersList from "../../views/Users/List";

class App extends Component {
  render() {
    return (
      <div className="kryptstorm-app hold-transition skin-green sidebar-mini sidebar-collapse">
        <div className="wrapper">
          <MainHeader />
          <MainSidebar />

          <div className="content-wrapper">
            <PageHeader />

            <PageContent>
              <Switch>
                <Route
                  path="/dashboard"
                  name="Dashboard"
                  component={Dashboard}
                />
                <Route
                  path="/users/list"
                  name="UsersList"
                  component={UsersList}
                />
                <Redirect exact from="/" to="/dashboard" />
                <Redirect exact from="/users" to="/users/list" />
              </Switch>
            </PageContent>
          </div>

          <MainFooter />
          <div className="control-sidebar-bg" />
        </div>
      </div>
    );
  }
}

export default App;
