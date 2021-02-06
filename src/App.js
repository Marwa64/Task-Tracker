import Landing from './components/Landing'
import Content from './components/Content'
import { useState } from 'react'

const App = () => {

  const [login, setLogin] = useState(false);

  const loginFunc = () => {
    setLogin(true);
  }

  return (
    <>
      {login ? <Content /> : <Landing login={loginFunc} />}
    </>
  );
}

export default App;
