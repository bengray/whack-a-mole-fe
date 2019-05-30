import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import { setValidUser, setUserName } from '../actions/index';

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorMessage: null
        }
    }

    handleInput = (field, value) => {
        this.setState({[field]: value, errorMessage: null});
    }

    detectEnterKeyPress = (event) => {
        if(event.keyCode === 13) {
            this.handleSubmit();
        }
    }

    // createNewUser = () => {
    //     const url = 'http://localhost:8000/user';
    //     const data = {
    //         "userName": this.state.userName,
    //         "password": this.state.password
    //     };
    //     return fetch(url, {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': "application/json; charset=utf-8"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(results => results.json())
    //     .then(results => console.log(results));
    // }

    handleValidUser = (userName) => {
        this.props.setValidUser(userName);
        this.props.setUserName(userName);
    }

    handleSubmit = () => {
        fetch(`http://localhost:8000/user?userName=${this.state.userName}&password=${this.state.password}`)
        .then(result => result.json())
        .then(result => this.handleValidUser(result.userName))
        .catch(error => this.setState({errorMessage: 'Invalid User Credentials'}));
    }

    render() {
        return (
            <Modal show={!this.props.validUser}
                   bsSize="small"
                   onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>
                       Login
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span className="error-message">{this.state.errorMessage}</span>
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
                    <Button onClick={this.handleSubmit}
                            bsSize="sm"
                            bsStyle="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        validUser: state.validUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setValidUser: (userName) => dispatch(setValidUser(userName)),
        setUserName: (userName) => dispatch(setUserName(userName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);