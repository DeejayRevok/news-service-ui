import React, {ReactNode} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import './Login.css';
import {AuthService} from "../services/AuthService";

/**
 * Login form component
 */
export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            authError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPass = this.setPass.bind(this);
        this.showAuthError = this.showAuthError.bind(this);
        this.hideAuthError = this.hideAuthError.bind(this);
    }

    setEmail(email) {
        this.setState((state) => {
            state.email = email;
            return state;
        });
    }

    setPass(pass) {
        this.setState((state) => {
            state.pass = pass;
            return state;
        });
    }

    hideAuthError() {
        this.setState((state) => {
            state.authError = false;
            return state;
        });
    }

    showAuthError() {
        this.setState((state) => {
            state.authError = true;
            return state;
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        AuthService.authorize(this.state.email, this.state.pass).then(res => {
            console.log('Success authorization');
            this.props.history.push('/feed');
        }).catch(error => {
            console.log('Authorization error');
            this.showAuthError();
        });
    }

    /**
     * Render the login form component
     *
     * @returns {*}
     */
    render(): ReactNode {
        return (
            <div className="Login">
                <div className="LoginFormWraper">
                    <div className="LoginFormHeader">
                        LogIn
                    </div>
                    <Form className="LoginForm" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="user">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={({target: {value}}) => this.setEmail(value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="pass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={({target: {value}}) => this.setPass(value)}
                            />
                        </Form.Group>
                        <Alert show={this.state.authError} variant='danger' onClose={() => this.hideAuthError()}
                               dismissible>
                            Wrong username or password!
                        </Alert>
                        <div style={{display: 'flex'}}>
                            <Button variant="primary" type="submit" style={{width: '100%'}}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
