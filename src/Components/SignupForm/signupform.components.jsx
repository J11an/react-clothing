import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";
import '../SignupForm/signupform.styles.scss';

const defaultFormFields = {

    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignupForm = () =>{

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields
    // console.log(formFields)

    const handleSubmit = (async(event)=>{

        event.preventDefault();
        if (password !== confirmPassword){
            alert('Passwords do not match ')
            return;
        }
        else{

            try{
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user,{displayName});
                resetFormFields();
                
            }

            catch(error){
                console.log("User creation error",error);
            }
        }

    })

    const handleChange = (event) => {
        
        const {name,value} = event.target;
        
        setFormFields({...formFields,[name]:value})

    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    return (
        <div className = "sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label ="Display Name" type = "text" required onChange={handleChange} name = "displayName" value = {displayName}/>

                <FormInput label ="Email" type = "email" required onChange={handleChange} name = "email" value = {email}/>

                <FormInput  label ="Password"type = "password" required onChange={handleChange} name = "password" value = {password}/>

                <FormInput  label ="Confirm Password" type = "password" required onChange={handleChange} name ="confirmPassword" value = {confirmPassword}/>

                <Button buttonType = "inverted" type = "submit">Sign Up</Button>
            </form>
        </div>
    );

}

export default SignupForm;