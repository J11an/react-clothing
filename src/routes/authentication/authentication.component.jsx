import SignInForm from '../../Components/SignInForm/signinform.component';
import SignupForm from '../../Components/SignupForm/signupform.components';
import '../authentication/authentication.styles.scss';

const Authentication = () => {

    return (
        <>
        <h1>Sign in Page</h1>
        <div className='authentication-container'>
            <SignInForm></SignInForm>
            <SignupForm></SignupForm>
        </div>
        </>

    );

}

export default Authentication;