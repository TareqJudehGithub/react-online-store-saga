import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";

//184. 185(emailSignInStart)
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

import "./sign-in.styles.scss";

class Signin extends React.Component {
     constructor(props){
          super(props)
               this.state= {
                    email: "",
                    password: ""                 
               }
     }
handleSumbit = async (event) => {
     event.preventDefault();
     const { emailSignInStart} = this.props;
     const { email, password } = this.state;
     emailSignInStart(email, password)

}
handleChange = (event) => {
     const { value, name } =event.target;
     this.setState({[name]: value})
}

render(){
     const { googleSignINStart } = this.props;
     return (
          <div className="sign-in">
               <h2 className="title">ALREADY HAVE AN ACCOUNT?</h2>
               <h2>SIGN IN</h2>

               <form
               onSubmit={this.handleSumbit}>

                    <FormInput 
                    name="email"
                    type="email"
                    // placeholder="example@email.com" 
                    value={this.state.email}
                    onChangeProp={this.handleChange}
                    label="email"
                    required
                    />
               
                    <FormInput
                    name="password"
                    type="password"
                    // placeholder="enter password"
                    value={this.state.password}
                    onChangeProp={this.handleChange}
                    label="password"
                    required
                    />
                    <div className="buttons">
                    <CustomButton 
                    type="submit"
                    >Sign in</CustomButton>

                    <CustomButton
                    //184
                    type="button"
                    // onClick={signInWithGoogle}
                    onClick={googleSignINStart}
                     isGoogleSignin>
                    Sign in with Google</CustomButton>
                    </div>
                    
               </form>
     </div>
          )
     }
}
//184 + 185
const mapDispatchToProps = (dispatch) => ({
     googleSignINStart: () => dispatch(googleSignInStart()),
     
     emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(Signin);
