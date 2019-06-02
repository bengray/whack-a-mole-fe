import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import { setLoginErrorMessage, createNewUser, userLogin } from '../actions/index';

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            errorMessage: null,
            createNewUser: false
        }
    }

    handleInput = (field, value) => {
        this.props.setLoginErrorMessage(null);
        this.setState({[field]: value, errorMessage: null});
    }

    detectEnterKeyPress = (event) => {
        if(event.keyCode === 13 && !this.state.createNewUser) {
            this.handleSubmit();
        }
        if(event.keyCode === 13 && this.state.createNewUser) {
            this.handleCreateNewUser();
        }
    }

    handleCreateNewUser = () => {
        if(this.state.password !== this.state.confirmPassword) {
            this.setState({errorMessage: 'Passwords do not match'});
        } else if (!this.state.password) {
            this.setState({errorMessage: 'A password is required'});
        } else {
            this.props.createNewUser(this.state.userName, this.state.password);
        }
    }

    handleSubmit = () => {
        this.props.userLogin(this.state.userName, this.state.password);
    }

    switchToCreateUser = () => {
        this.setState({createNewUser: true})
    }

    renderCreateUser = () => {
        return (
            <div className="modal-contents">
                <Modal.Header>
                    <Modal.Title>
                        Create New User
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span className="error-message">{this.state.errorMessage}</span>
                    <span className="error-message">{this.props.loginErrorMessage}</span>
                    <FormGroup>
                        <FormControl ref="name"
                                id="name"
                                placeholder="User Name"
                                onKeyDown={this.detectEnterKeyPress}
                                onChange={(event) => this.handleInput('userName', event.target.value)}
                                value={this.state.userName} />
                        <br />
                        <FormControl ref="password"
                                id="password"
                                type="password"
                                placeholder="Password"
                                onKeyDown={this.detectEnterKeyPress}
                                onChange={(event) => this.handleInput('password', event.target.value)}
                                value={this.state.password} />
                                <br />
                        <FormControl ref="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                onKeyDown={this.detectEnterKeyPress}
                                onChange={(event) => this.handleInput('confirmPassword', event.target.value)}
                                value={this.state.confirmPassword} />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <span className="cancel-create-user" onClick={() => this.setState({createNewUser: false})}>Cancel</span>
                    <Button onClick={this.handleCreateNewUser}
                            bsSize="sm"
                            bsStyle="primary">Create and Login</Button>
                </Modal.Footer>
            </div>
        )
    }

    renderUserLogin = () => {
        return (
            <div className="modal-contents">
                <Modal.Header>
                    <Modal.Title>
                        Whack-a-mole
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span className="error-message">{this.props.loginErrorMessage}</span>
                    <FormGroup>
                        <FormControl ref="name"
                                id="name"
                                placeholder="User Name"
                                onKeyDown={this.detectEnterKeyPress}
                                onChange={(event) => this.handleInput('userName', event.target.value)}
                                value={this.state.userName} />
                        <br />
                        <FormControl ref="password"
                                id="password"
                                type="password"
                                placeholder="Password"
                                onKeyDown={this.detectEnterKeyPress}
                                onChange={(event) => this.handleInput('password', event.target.value)}
                                value={this.state.password} />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.switchToCreateUser}
                            bsSize="sm">Create New User</Button>
                    <Button onClick={this.handleSubmit}
                            bsSize="sm"
                            bsStyle="primary">Login</Button>
                </Modal.Footer>
            </div>
        )
    }

    render() {
        return (
            <Modal show={!this.props.validUser}
                   bsSize="large"
                   backdrop={false}
                   dialogClassName="custom-modal"
                   bsClass="my-modal"
                   animation={false}
            >
                {this.state.createNewUser ? this.renderCreateUser() : this.renderUserLogin()}
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        validUser: state.validUser,
        loginErrorMessage: state.loginErrorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewUser: (userName, password) => dispatch(createNewUser(userName, password)),
        userLogin: (userName, password) => dispatch(userLogin(userName, password)),
        setLoginErrorMessage: (message) => dispatch(setLoginErrorMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);