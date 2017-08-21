import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="kryptstorm-app hold-transition skin-green sidebar-mini sidebar-collapse">
        <div className="wrapper">
          <header className="main-header">
            <a href="../../index2.html" className="logo">
              <span className="logo-mini">
                <b>A</b>LT
              </span>
              <span className="logo-lg">
                <b>Admin</b>LTE
              </span>
            </a>
            <nav className="navbar navbar-static-top">
              <a
                href="#"
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </a>

              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown messages-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
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
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-bell-o" />
                      <span className="label label-warning">10</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 10 notifications</li>
                      <li>
                        <ul className="menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-aqua" /> 5 new
                              members joined today
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
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
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
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
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

          <aside className="main-sidebar">
            <section className="sidebar">
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src="/images/user2-160x160.jpg"
                    className="img-circle"
                    alt="User Image"
                  />
                </div>
                <div className="pull-left info">
                  <p>Alexander Pierce</p>
                  <a href="#">
                    <i className="fa fa-circle text-success" /> Online
                  </a>
                </div>
              </div>
              <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="q"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      name="search"
                      id="search-btn"
                      className="btn btn-flat"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-dashboard" /> <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../../index.html">
                        <i className="fa fa-circle-o" /> Dashboard v1
                      </a>
                    </li>
                    <li>
                      <a href="../../index2.html">
                        <i className="fa fa-circle-o" /> Dashboard v2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-files-o" />
                    <span>Layout Options</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">4</span>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../layout/top-nav.html">
                        <i className="fa fa-circle-o" /> Top Navigation
                      </a>
                    </li>
                    <li>
                      <a href="../layout/boxed.html">
                        <i className="fa fa-circle-o" /> Boxed
                      </a>
                    </li>
                    <li>
                      <a href="../layout/fixed.html">
                        <i className="fa fa-circle-o" /> Fixed
                      </a>
                    </li>
                    <li>
                      <a href="../layout/collapsed-sidebar.html">
                        <i className="fa fa-circle-o" /> Collapsed Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="../widgets.html">
                    <i className="fa fa-th" /> <span>Widgets</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-green">Hot</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-pie-chart" />
                    <span>Charts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../charts/chartjs.html">
                        <i className="fa fa-circle-o" /> ChartJS
                      </a>
                    </li>
                    <li>
                      <a href="../charts/morris.html">
                        <i className="fa fa-circle-o" /> Morris
                      </a>
                    </li>
                    <li>
                      <a href="../charts/flot.html">
                        <i className="fa fa-circle-o" /> Flot
                      </a>
                    </li>
                    <li>
                      <a href="../charts/inline.html">
                        <i className="fa fa-circle-o" /> Inline charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-laptop" />
                    <span>UI Elements</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../UI/general.html">
                        <i className="fa fa-circle-o" /> General
                      </a>
                    </li>
                    <li>
                      <a href="../UI/icons.html">
                        <i className="fa fa-circle-o" /> Icons
                      </a>
                    </li>
                    <li>
                      <a href="../UI/buttons.html">
                        <i className="fa fa-circle-o" /> Buttons
                      </a>
                    </li>
                    <li>
                      <a href="../UI/sliders.html">
                        <i className="fa fa-circle-o" /> Sliders
                      </a>
                    </li>
                    <li>
                      <a href="../UI/timeline.html">
                        <i className="fa fa-circle-o" /> Timeline
                      </a>
                    </li>
                    <li>
                      <a href="../UI/modals.html">
                        <i className="fa fa-circle-o" /> Modals
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-edit" /> <span>Forms</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../forms/general.html">
                        <i className="fa fa-circle-o" /> General Elements
                      </a>
                    </li>
                    <li>
                      <a href="../forms/advanced.html">
                        <i className="fa fa-circle-o" /> Advanced Elements
                      </a>
                    </li>
                    <li>
                      <a href="../forms/editors.html">
                        <i className="fa fa-circle-o" /> Editors
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-table" /> <span>Tables</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="../tables/simple.html">
                        <i className="fa fa-circle-o" /> Simple tables
                      </a>
                    </li>
                    <li>
                      <a href="../tables/data.html">
                        <i className="fa fa-circle-o" /> Data tables
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="../calendar.html">
                    <i className="fa fa-calendar" /> <span>Calendar</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-red">3</small>
                      <small className="label pull-right bg-blue">17</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="../mailbox/mailbox.html">
                    <i className="fa fa-envelope" /> <span>Mailbox</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-yellow">12</small>
                      <small className="label pull-right bg-green">16</small>
                      <small className="label pull-right bg-red">5</small>
                    </span>
                  </a>
                </li>
                <li className="treeview active">
                  <a href="#">
                    <i className="fa fa-folder" /> <span>Examples</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="invoice.html">
                        <i className="fa fa-circle-o" /> Invoice
                      </a>
                    </li>
                    <li>
                      <a href="profile.html">
                        <i className="fa fa-circle-o" /> Profile
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fa fa-circle-o" /> Login
                      </a>
                    </li>
                    <li>
                      <a href="register.html">
                        <i className="fa fa-circle-o" /> Register
                      </a>
                    </li>
                    <li>
                      <a href="lockscreen.html">
                        <i className="fa fa-circle-o" /> Lockscreen
                      </a>
                    </li>
                    <li>
                      <a href="404.html">
                        <i className="fa fa-circle-o" /> 404 Error
                      </a>
                    </li>
                    <li>
                      <a href="500.html">
                        <i className="fa fa-circle-o" /> 500 Error
                      </a>
                    </li>
                    <li className="active">
                      <a href="blank.html">
                        <i className="fa fa-circle-o" /> Blank Page
                      </a>
                    </li>
                    <li>
                      <a href="pace.html">
                        <i className="fa fa-circle-o" /> Pace Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-share" /> <span>Multilevel</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Two
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Two
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right" />
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://adminlte.io/docs">
                    <i className="fa fa-book" /> <span>Documentation</span>
                  </a>
                </li>
                <li className="header">LABELS</li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-red" />{" "}
                    <span>Important</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-yellow" />{" "}
                    <span>Warning</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-aqua" />{" "}
                    <span>Information</span>
                  </a>
                </li>
              </ul>
            </section>
          </aside>

          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                Blank page
                <small>it all starts here</small>
              </h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-dashboard" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Examples</a>
                </li>
                <li className="active">Blank page</li>
              </ol>
            </section>

            <section className="content">
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
                <div className="box-body">
                  Start creating your amazing application!
                </div>
                <div className="box-footer">Footer</div>
              </div>
            </section>
          </div>

          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 2.4.0
            </div>
            <strong>
              Copyright &copy; 2014-2016{" "}
              <a href="https://adminlte.io">Almsaeed Studio</a>.
            </strong>{" "}
            All rights reserved.
          </footer>
          <div className="control-sidebar-bg" />
        </div>
      </div>
    );
  }
}

export default App;
