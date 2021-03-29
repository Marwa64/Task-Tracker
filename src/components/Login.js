
const Login = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    props.login();
  }
  return (
    <>
    <form className='login-form' onSubmit={onSubmit}>
      <div className='form-control' >
        <label>Email</label>
        <input type='text' placeholder='Enter Email'/>
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input type='password' placeholder='Enter Password'/>
      </div>

      <input type='submit' value='Login' className='btn' id="submit"/>
      <button className='btn'>Sign in with BlackBoard</button>
      <h4>Don't have an account? <a onClick = {props.signup}> Sign up here! </a></h4>
    </form>
    </>
  )
}

export default Login;
