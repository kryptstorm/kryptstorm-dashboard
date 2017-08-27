import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";

export default class Ask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: "Confirm",
      content: <p />,
      yesLabel: "Yes",
      noLabel: "No",
      yesHandler: this.toggle,
      noHandler: this.toggle
    };

    let {
      open,
      title,
      content,
      yesLabel,
      noLabel,
      yesHandler,
      noHandler
    } = props;
    this.setState({
      open,
      title,
      content,
      yesLabel,
      noLabel,
      yesHandler,
      noHandler
    });

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Modal isOpen={this.state.open}>
        <ModalHeader toggle={this.toggle}>
          {this.state.title}
        </ModalHeader>
        <ModalBody>
          {this.props.content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.state.yesHandler}>
            {this.state.yesLabel}
          </Button>
          <Button color="default" onClick={this.state.noHandler}>
            {this.state.noLabel}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

Ask.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
  yesLabel: PropTypes.string,
  noLabel: PropTypes.string,
  yesHandler: PropTypes.func,
  noHandler: PropTypes.func
};
