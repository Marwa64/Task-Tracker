
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
        <input id='taskText' type='text' placeholder='Enter Email'/>
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input id='day' type='text' placeholder='Enter Password'/>
      </div>

      <input type='submit' value='Log in' className='btn' id="submit"/>
    </form>
    </>
  )
}

export default Login;
