import axios from 'axios';

const Login = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let user = {email, password};

    axios.post('http://localhost:5000/users/login', user)
    .then(res => res.data ? props.login(res.data) : '');
  }
  return (
    <>
    <form className='login-form' onSubmit={onSubmit}>
      <div className='form-control slide' >
        <label>Email</label>
        <input id='email' type='text' placeholder='Enter Email'/>
      </div>
      <div className='form-control slide'>
        <label>Password</label>
        <input id='password' type='password' placeholder='Enter Password'/>
      </div>
        <input type='submit' value='Login' className='btn slide' id="submit"/>
        <button className='btn slide'>Sign in with Google</button>
        <h4 className='slide'>Don't have an account? <a onClick = {props.signup}> Sign up here! </a></h4>
    </form>
    </>
  )
}

export default Login;
