import React, { Component } from 'react';
class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            confirmpassword: '',
            gender: '',
            qualification: '',
            hobbies: [''],
            usernameError: '',
            passwordError: '',
            confirmpasswordError: '',
            emailError: '',
            genderError: '',
            qualificationError: '',
            hobbiesError: ''
        }
    }

    onChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validate = () => {
        let isError = false;
        const errors = {
            usernameError: "",
            emailError: "",
            passwordError: "",
            confirmpasswordError: '',
            genderError: '',
            hobbiesError: '',
            qualificationError: ''
        };
        if (this.state.username.length < 5) {
            isError = true;
            errors.usernameError = "Username needs to be atleast 5 characters long";
        }
        if (this.state.username === '') {
            isError = true;
            errors.usernameError = "Username Required ";
        }

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        }
        if (this.state.password === '') {
            isError = true;
            errors.passwordError = "Password Required ";
        }
        if (this.state.confirmpassword === '') {
            isError = true;
            errors.confirmpasswordError = "Confirm Password Required ";
        }
        if (this.state.gender === '') {
            isError = true;
            errors.genderError = "Gender Required ";
        }
        if (this.state.qualification === '') {
            isError = true;
            errors.qualificationError = "Qualification Required ";
        }
        if (this.state.hobbies === ['']) {
            isError = true;
            errors.hobbiesError = "Please select atleast One Hobbies ";
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };



    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                username: '',
                usernameError: '',
                password: '',
                passwordError: '',
                confirmpassword: '',
                confirmpasswordError: '',
                email: '',
                emailError: '',
                gender: '',
                genderError: '',
                hobbies: [''],
                hobbiesError: '',
                qualification: '',
                qualificationError: ''
            });
            // this.props.onChange({
            //     username: "",
            //     email: "",
            //     password: "",
            //     confirmpassword: "",
            //     gender: "",
            //     hobbies: "",
            //     qualification: ""

            // });
            alert("Registered successfully")

            this.props.history.push('/login');
        }


    }

    render() {

        const { username, password, email, confirmpassword, gender, qualification, hobbies = [] } = this.state;

        return (

            <div className="center">
                <h3 className="text-center">Register Form</h3> <hr/>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label> User Name :</label>
                        <input name="username" onChange={this.onChanged}
                            value={username} type="text" className="form-control" />
                   <span style={{color: "red"}}>{this.state.usernameError}</span>
                    </div>

                    <div className="form-group">
                        <label> Password :</label>
                        <input name="password" onChange={this.onChanged}
                            value={password} type="password" className="form-control" />
                    <span style={{color: "red"}}>{this.state.passwordError}</span>
                    </div>

                    <div className="form-group">
                        <label> Confirm Password :</label>
                        <input name="confirmpassword" onChange={this.onChanged}
                            value={confirmpassword} type="password" className="form-control" />
                    <span style={{color: "red"}}>{this.state.confirmpasswordError}</span>
                    </div>

                    <div className="form-group">
                        <label> Email :</label>
                        <input name="email" onChange={this.onChanged}
                            value={email} type="text" className="form-control" />
                    <span style={{color: "red"}}>{this.state.emailError}</span>
                    </div>

                    <div className="form-group">
                        <label> Gender :</label>&nbsp; &nbsp;
                        <input name="gender" onChange={this.onChanged}
                            value={gender} type="radio"   /> Male &nbsp; &nbsp;
                        <input name="gender" onChange={this.onChanged}
                            value={gender} type="radio"  /> Female
                            <span style={{color: "red"}}>{this.state.genderError}</span>
                    </div>

                    <div className="form-group" >
                        <label> Hobbies :</label>&nbsp; &nbsp;
                        <input onChange={this.onChanged} name="hobbies"
                            value={[hobbies]} type="checkbox"  /> Swimming &nbsp; &nbsp;
                            <input onChange={this.onChanged} name="hobbies"
                            value={[hobbies]} type="checkbox"  /> Music &nbsp; &nbsp;
                            <input onChange={this.onChanged} name="hobbies"
                            value={[hobbies]} type="checkbox"   /> Movies &nbsp; &nbsp;
                            <input onChange={this.onChanged} name="hobbies"
                            value={[hobbies]} type="checkbox"  /> games
                    <span style={{color: "red"}}>{this.state.hobbiesError}</span>
                    </div>

                    <div className="form-group">
                    <label> Qualifiction :</label>
                        <select name="qualification" className="form-control" value={qualification} onChange={this.onChanged}>
                            <option >Select Qualifiction</option>
                            <option value="B.tech">B.tech</option>
                            <option value="BCA">BCA</option>
                            <option value="Bsc">Bsc</option>
                            <option value="BE">BE</option>
                            <option value="CA">CA</option>
                        </select>
                        <span style={{ color: "red" }}>{this.state.qualificationError}</span>
                    </div>

                    <button className="btn btn-success btn-block" type="submit">Sign In</button>

                </form>
            </div>

        )
    }
}

export default Register;


