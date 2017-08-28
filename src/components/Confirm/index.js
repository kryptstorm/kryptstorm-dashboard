// External modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
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
    // If modal is not open, show an element - what is handle click event to show confirm modal
    if (!this.state.isOpen) {
      // Clone new element allow we add more props to old element
      // At here, we add an onClick event
      return React.cloneElement(this.props.triggerElement, {
        onClick: this.open
      });
    }

    // Render modal
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
  triggerElement: PropTypes.element.isRequired,
  onNo: PropTypes.func,
  noLabel: PropTypes.string,
  onYes: PropTypes.func.isRequired,
  yesLabel: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element.isRequired,
  data: PropTypes.object.isRequired
};

export default Confirm;
