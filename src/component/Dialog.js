import React, { Component } from "react";
import Modal from "react-modal";

class Dialog extends Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isActive}
        onRequestClose={this.props.closeModal}
      >
        <h4>{this.props.song.name}</h4>

        <p>{this.props.song.mbid}</p>

        {console.log(this.props.song.streamable)}
      </Modal>
    );
  }
}

export default Dialog;
