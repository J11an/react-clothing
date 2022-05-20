import { useState,useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";
import '../SignInForm/signinform.styles.scss';


const defaultFormFields = {

    email: '',
    password: '',
}


const SignInForm = () =>{

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields

    const {setCurrentUser} = useContext(UserContext);


    const handleSubmit = (async(event)=>{

        event.preventDefault();
  

            try{
                const {user} = await signInAuthUserWithEmailAndPassword(email,password);
                setCurrentUser(user)
                resetFormFields();
                
            }

            catch(error){
                console.log("User login error",error);
            }

    })

    const handleChange = (event) => {
        
        const {name,value} = event.target;
        
        setFormFields({...formFields,[name]:value})

    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        setCurrentUser(user);

    }


    return (
        <div className = "sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label ="Email" type = "email" required onChange={handleChange} name = "email" value = {email}/>

                <FormInput  label ="Password"type = "password" required onChange={handleChange} name = "password" value = {password}/>
                <div className = "buttons-container">
                    <Button buttonType = "inverted" type = "submit">Sign In</Button>
                    <Button type = "button" buttonType = "google" onClick = {signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );

}

export default SignInForm;