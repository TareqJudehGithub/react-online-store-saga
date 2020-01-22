import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import  {signInWithGoogle, auth} from "../../firebase/firebase.utils";

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
     const { email, password } = this.state;
     try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ //clears the Sign In form
               email: "",
               password: ""    
          })
     } catch (error) {
          console.log(error);
     }

}
handleChange = (event) => {
     const { value, name } =event.target;
     this.setState({[name]: value})
}

render(){

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
                    onClick={signInWithGoogle}
                     isGoogleSignin>
                    Sign in with Google</CustomButton>
                    </div>
                    
               </form>
     </div>
          )
     }
}
export default Signin;

// import { render } from "@testing-library/react";