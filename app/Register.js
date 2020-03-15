import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            email: null,
            pass: null,

        };

        this.handleName= this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        window.location = '/Home';
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassWord(event) {
        this.setState({ pass: event.target.value });
    }

    register() {
        fetch(Globals.API_ROOT_URL + `/analytics/value`, {
            method: 'POST',
            headers: utils.setApiHeaders('post'),
            body: JSON.stringify({ data: fields })
          })
            .then(response => {
              return response.json()
            })
            .then(json => {
              if (json.code == 200) {
                  dispatch(fetchValuesList())
                  dispatch(saveValueSuccess(json.message))
              } else {
                dispatch(saveValueError(json.error))
                utils.handleSessionError(json)
              }
            })
            .catch(err => {
              throw err
            })
     }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.handleName} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePassWord}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}