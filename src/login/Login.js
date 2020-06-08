import React, {ReactNode} from "react";
import {Button, Form} from "react-bootstrap";
import './Login.css';
import {Link} from "react-router-dom";

export class Login extends React.Component {

    render(): ReactNode{
        return (
            <div className="Login">
                <div className="LoginFormWraper">
                    <div className="LoginFormHeader">
                        LogIn
                    </div>
                    <Form className="LoginForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <div style={{display: 'flex'}}>
                            <Link to="/feed" style={{width: '100%'}}>
                                <Button variant="primary" type="submit" style={{width: '100%'}}>
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
