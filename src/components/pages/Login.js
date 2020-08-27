import React, { Component } from 'react';
class Login extends Component {

    constructor() {
        super();
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.state = {
            username: '',
            password: ''
        };
    }

    validate = () => {
        let isError = false;
        const errors = {
            usernameError: "",
            passwordError: ""
        };

        if (this.state.username.length < 5) {
            isError = true;
            errors.usernameError = "Username needs to be atleast 5 characters long";
        }
        if (this.state.username === '') {
            isError = true;
            errors.usernameError = "Username Required ";
        }
        if (this.state.password === '') {
            isError = true;
            errors.passwordError = "Password Required ";
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };



    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.usernameInput.current.value);
        console.log(this.passwordInput.current.value)
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                username: '',
                usernameError: '',
                password: '',
                passwordError: ''

            });

            this.props.history.push('/');
        }
    }

    render(){
       
        return(

            <div className="center">
            <h3 className="text-center">Welcome to Login Details</h3>
            <hr/>
            <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input name="username" className="form-control" ref={this.usernameInput} />
                        <span style={{color: "red"}}>{this.state.usernameError}</span>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" ref={this.passwordInput} ></input>
                        <span style={{color: "red"}}>{this.state.passwordError}</span>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit" >Login</button>
                </form>
        </div>
        )
    }
}


export default Login;