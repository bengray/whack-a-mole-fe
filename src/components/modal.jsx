import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import ReactDOM from 'react-dom';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { setItem, closeModal } from '../actions/index';

class MyModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.detectEnterKeyPress = this.detectEnterKeyPress.bind(this);

        this.state = {
            nameError: "",
            phoneError: "",
            showNameError: false,
            showPhoneError: false
        }
    }

    handleClose() {
        this.setState({ nameError: "", showNameError: false });
        this.setState( { phoneError: "", showPhoneError: false });
        this.props.closeModal();
    }

    validateName() {
        const nameInput = ReactDOM.findDOMNode(this.refs.name).value;

        if(!isEmpty(nameInput)) {
            this.setState({ nameError: "", showNameError: false });
            return true;
        } else {
            this.setState({ nameError: "Name field is required.", showNameError: true });
            return false;
        }
    }

    validatePhone() {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const phoneInput = ReactDOM.findDOMNode(this.refs.phone).value;

        if(phoneInput.match(phoneRegex)) {
            this.setState( { phoneError: "", showPhoneError: false });
            return true;
        } else {
            this.setState({ phoneError: "Valid phone number is required. Example: 123-456-7890.", showPhoneError: true });
            return false;
        }
    }

    handleSave() {
        const validName = this.validateName();
        const validPhone = this.validatePhone();

        if(validPhone && validName) {
            this.props.setItem({
                name: ReactDOM.findDOMNode(this.refs.name).value,
                phone: ReactDOM.findDOMNode(this.refs.phone).value,
                time: this.props.selectedItem.time,
                displayName: this.props.selectedItem.displayName,
                scheduled: "true",
            });
            this.props.closeModal();
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

    detectEnterKeyPress(event) {
        if(event.keyCode === 13) {
            this.handleSave();
        }
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
                    <div className={(this.state.showNameError) ? "alert alert-danger" : "hidden"}>
                        {this.state.nameError}
                    </div>
                    <div className={(this.state.showPhoneError) ? "alert alert-danger": "hidden"}>
                        {this.state.phoneError}
                    </div>
                    <FormGroup>
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl ref="name"
                               id="name"
                               className="col-xs-12"
                               placeholder="Full Name"
                               onKeyDown={this.detectEnterKeyPress}
                               defaultValue={this.props.selectedItem.name} />
                        <br />
                        <br />
                        <br />
                        <ControlLabel>Phone Number:</ControlLabel>
                        <FormControl ref="phone"
                               id="phone"
                               className="col-xs-12"
                               placeholder="###-###-####"
                               maxLength={12}
                               onKeyDown={this.detectEnterKeyPress}
                               defaultValue={this.props.selectedItem.phone} />
                        <br />
                        <br />
                    </FormGroup>
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