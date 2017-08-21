import React, { Component } from "react";

class PageContent extends Component {
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    );
  }
}

export default PageContent;
