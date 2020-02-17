import React from "react";
import FormInput from "../form-input/form-input.component"
import "./sign-up.styles.scss";
 //190.4
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button-component";

class Signup extends React.Component {
     constructor(){
          super()
          
          this.state = {
               displayName: "",
               email: "",
               password: "",
               confirmPassword: ""
          }
     }
     handleSubmit = async (event) => {
          event.preventDefault();
          //190.4
          const { signUpStart } = this.props;
          const { displayName, email, password, confirmPassword } = this.state;
          if(password !== confirmPassword) {
               alert("password and confirm password does not match");
               return;
          }
          //190.4
          signUpStart({ displayName, email, password });
     };

     handleChange = (event) => {
          const { name, value } = event.target;
          this.setState({[name]: value})
     }

     render() {
          const { displayName, email, password, confirmPassword } = this.state;
          return(
               <div className="sign-up">
                    <h2 className="title">New user?</h2>
                    <h2>Sign up now!</h2>
                    <form className="sign-up-form"
                    onSubmit={this.handleSubmit}
                    >
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="email"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="confirm Password"
                    required
                    >
                    </FormInput>

                    <CustomButton type="submit">
                    SIGN UP
                    </CustomButton>
                    </form>

               </div>
          )
     }
}
const mapDispatchToProps = (dispatch) => ({
     signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});
export default connect(null, mapDispatchToProps)(Signup);