import React, { Component } from "react";

export default class PageContent extends Component {
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    );
  }
}
