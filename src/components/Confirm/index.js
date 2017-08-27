import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

class Confirm extends Component {
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
    this.props.onYes(this.props.data);
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
          <Modal.Title>
            {this.props.title ? this.props.title : "Confirm"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.content}
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

Confirm.propTypes = {
  onNo: PropTypes.func,
  noLabel: PropTypes.string,
  onYes: PropTypes.func.isRequired,
  yesLabel: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element.isRequired,
  data: PropTypes.object.isRequired
};

export default Confirm;
