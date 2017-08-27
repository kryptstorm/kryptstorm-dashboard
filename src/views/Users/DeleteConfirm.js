import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

class DeleteConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  open = e => this.setState({ isOpen: true });
  close = e => this.setState({ isOpen: false });

  cancel = e => {
    if (this.props.onNo) this.props.onNo(this.props.data);
    this.close();
  };

  submit = e => {
    if (this.props.onYes) this.props.onYes(this.props.data);
    this.close();
  };

  render() {
    if (!this.state.isOpen) {
      return (
        <i
          className="fa fa-lg fa-fw fa-trash-o text-danger"
          onClick={this.open}
        />
      );
    }

    return (
      <Modal show={this.state.isOpen} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger text-center">
            Do you want to delete this user?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.cancel}>
            {this.props.noLabel ? this.props.noLabel : "No"}
          </Button>

          <Button onClick={this.submit} bsStyle={"primary"}>
            {this.props.yesLable ? this.props.yesLable : "Yes"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeleteConfirm;
