import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { setItem, closeModal } from '../actions/index';

class MyModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClose() {
        this.props.closeModal();
    }

    handleSave() {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const phoneInput = ReactDOM.findDOMNode(this.refs.phone).value;
        const nameInput = ReactDOM.findDOMNode(this.refs.name).value

        if(phoneInput.match(phoneRegex)) {
            this.props.setItem({
                name: nameInput,
                phone: phoneInput,
                time: this.props.selectedItem.time,
                displayName: this.props.selectedItem.displayName,
                scheduled: "true",
            });
            this.props.closeModal();
        } else {
            alert("Please enter a valid phone number: \n(dashes required) \nexample: 555-567-7890");
        }


    }

    handleDelete() {
        this.props.setItem({
            name: "",
            phone: "",
            time: this.props.selectedItem.time,
            displayName: this.props.selectedItem.displayName,
            scheduled: "false",
        });
        this.props.closeModal();
    }

    render() {
        return (
            <Modal show={this.props.showModal}
                   bsSize="small"
                   onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                       Appointment for {this.props.selectedItem.displayName}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Name:<br />
                    <input ref="name"
                           className="col-xs-12"
                           placeholder="Full Name"
                           defaultValue={this.props.selectedItem.name} />
                    <br />
                    <br />
                    Phone:<br />
                    <input ref="phone"
                           className="col-xs-12"
                           placeholder="###-###-####"
                           maxLength={12}
                           defaultValue={this.props.selectedItem.phone} />
                    <br />
                    <br />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleClose}
                            bsSize="sm">Cancel</Button>
                    <Button onClick={this.handleDelete}
                            className={this.props.selectedItem.scheduled === "true" ? '' : 'hidden'}
                            bsSize="sm"
                            bsStyle="danger">Delete</Button>
                    <Button onClick={this.handleSave}
                            bsSize="sm"
                            bsStyle="primary">Save</Button>
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