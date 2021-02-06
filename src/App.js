import Landing from './components/Landing'
import Content from './components/Content'
import { useState } from 'react'

const App = () => {

  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? <Content /> : <Landing />}
    </>
  );
}

export default App;
