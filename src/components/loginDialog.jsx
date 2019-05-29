import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { closeModal } from '../actions/index';

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClose = () => {
        this.props.closeModal();
    }

    detectEnterKeyPress = (event) => {
        if(event.keyCode === 13) {
            this.handleSave();
        }
    }

    render() {
        return (
            <Modal show={!this.props.showModal}
                   bsSize="small"
                   onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                       login
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl ref="name"
                               id="name"
                               className="col-xs-12"
                               placeholder="user name goes here"
                               onKeyDown={this.detectEnterKeyPress}
                               defaultValue='foo' />
                        <br />
                        <br />
                        <br />
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl ref="password"
                               id="password"
                               className="col-xs-12"
                               placeholder="password goes here"
                               onKeyDown={this.detectEnterKeyPress}
                               defaultValue='bar' />
                        <br />
                        <br />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleClose}
                            bsSize="sm">Cancel</Button>
                    <Button onClick={this.handleLogin}
                            bsSize="sm"
                            bsStyle="primary">Log in</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.userLogin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setItem: (item) => dispatch(setItem(item)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);