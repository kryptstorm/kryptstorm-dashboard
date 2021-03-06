import React, { Component } from "react";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.collapseSidebar = this.collapseSidebar.bind(this);
  }

  // Collapse sidebar
  collapseSidebar(e) {
    e.preventDefault();
    document
      .querySelector(".kryptstorm-app")
      .classList.toggle("sidebar-collapse");
  }

  render() {
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <span className="logo-mini">
            <img src="/images/kryptstorm/logo.png" alt="Krypt" />
          </span>
          <span className="logo-lg">
            <b>Krypt</b>storm
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" onClick={this.collapseSidebar}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o" />
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src="/images/user2-160x160.jpg"
                              className="img-circle"
                              alt="User Image"
                            />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="fa fa-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">See All Messages</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o" />
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua" /> 5 new members
                          joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown tasks-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-flag-o" />
                  <span className="label label-danger">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 9 tasks</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                          </h3>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-aqua"
                              style={{ width: "20%" }}
                              role="progressbar"
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="/images/user2-160x160.jpg"
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src="/images/user2-160x160.jpg"
                      className="img-circle"
                      alt="User Image"
                    />

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
