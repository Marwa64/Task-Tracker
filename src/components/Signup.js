import axios from 'axios';

const Signup = (props) => {
  const submit = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email");
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    if (!email.value) {
      console.log("no email");
      email.style.borderColor = '#cc0000';
      return;
    } else {
      email.style.borderColor = '#cc000000';
    }
    if (!pass1.value){
      console.log("no password");
      pass1.style.borderColor = '#cc0000';
      return;
    } else {
      pass1.style.borderColor = '#cc000000';
    }
    if (pass1.value !== pass2.value){
      console.log("passwords don't match");
      pass2.style.borderColor = '#cc0000';
      return;
    }
    pass2.style.borderColor = '#cc000000';

    let user = {
      email: email.value,
      password: pass1.value,
    }
    console.log(user);
    axios.post('http://localhost:5000/users/signup', user)
    .then(res => console.log(res)); //res => (res.data === "User Added!") ? props.signup() : console.log(res.data)
  }
  return (
    <>
    <form className='login-form' onSubmit={submit}>
      <div className='form-control slide' >
        <label>Email</label>
        <input id='email' type='text' placeholder='Enter Email'/>
      </div>
      <div className='form-control slide'>
        <label>Password</label>
        <input id='pass1' type='password' placeholder='Enter Password'/>
      </div>
      <div className='form-control slide'>
        <label>Confirm Password</label>
        <input id='pass2' type='password' placeholder='Re-enter Password'/>
      </div>

      <input type='submit' value='Sign up' className='btn slide' id="submit"/>
      <button className='btn slide'>Sign up with Google</button>
      <h4 className='slide'>Already have an account? <a onClick = {props.signup}> Login here! </a></h4>
    </form>
    </>
  )
}

export default Signup;
