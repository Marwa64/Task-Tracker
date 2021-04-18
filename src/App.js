import Landing from './components/Landing'
import Content from './components/Content'
import { useState } from 'react'
import axios from 'axios';

const App = () => {

  const refreshToken = () => {
    let token = '';
    axios.get('http://localhost:5000/users/token', { withCredentials: true })
    .then(res => res === 'undefined' ? token = '' : token = res);
    console.log('token: ' + token)
    return token;
  }

  const [token, setToken] = useState(refreshToken());

  const login = (data) => {
    setToken(data.token);
  }

  const logout = () => {
    setToken('');
  }

  return (
    <>
      {token ? <Content logout={logout} token={token}/> : <Landing login={login} />}
    </>
  );
}

export default App;
