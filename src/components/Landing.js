import LandingHeader from './LandingHeader';
import Login from './Login';
import Signup from './Signup';

const LandingPage = (props) => {
  return(
    <>
      <LandingHeader/>
      <Login login = {props.login}/>
      <br/><br/><br/>
    </>
  )
};

export default LandingPage;
