import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignin,...otherProps}) => (
     <button className=
     {`${isGoogleSignin 
                         ? "google-sign-in"
                         : ""}
                         custom-button`}
     {...otherProps}
     >  
     {children}
     </button>
)
export default CustomButton;

// isGoogleSignin is a prop used in designing the Google sign in button.
//line 6 conditional: render the class "google-sign-in" if isGoogleSignin is true,
// if not, then render "", and the custom-button.