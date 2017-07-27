import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { setItem, closeModal } from '../actions/index';

class MyModal extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.props.closeModal();
    }

    handleSubmit() {
        this.props.setItem({
            name: ReactDOM.findDOMNode(this.refs.name).value,
            phone: ReactDOM.findDOMNode(this.refs.phone).value,
            time: this.props.selectedItem.time,
            displayName: this.props.selectedItem.displayName,
            scheduled: "true",
        });
        this.props.closeModal();
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.selectedItem.time}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input ref="name"
                           placeholder="Name"
                           defaultValue={this.props.selectedItem.name} />
                    <br />
                    <br />
                    <input ref="phone"
                           placeholder="Phone Number"
                           defaultValue={this.props.selectedItem.phone} />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.handleSubmit} bsStyle="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        showModal: state.showModal,
        selectedItem: state.selectedItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setItem: (item) => dispatch(setItem(item)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);