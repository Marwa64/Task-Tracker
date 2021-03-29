import LandingHeader from './LandingHeader';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';

const LandingPage = (props) => {

  const [signup, setSignup] = useState(false);
  const signupFunc = () => {
    setSignup(!signup);
  }

  return(
    <>
      <LandingHeader/>
      {signup ? <Signup signup = {signupFunc}/> : <Login login = {props.login} signup = {signupFunc}/>}
      <br/><br/>
    </>
  )
};

export default LandingPage;
