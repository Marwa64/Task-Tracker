import Landing from './components/Landing'
import Content from './components/Content'
import { useState } from 'react'

const App = () => {

  const [token, setToken] = useState('');

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
