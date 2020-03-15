import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            email: null,
            pass: null
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();
        // if (this.state.email == "admin@co.uk" && this.state.pass == "admin") {
            window.location = '/Home';
        // }
        // else {
        //     alert('Username or password is incorrect');
        // }
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassWord(event) {
        this.setState({ pass: event.target.value });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePassWord} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}