import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import { useState } from 'react';



function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true

  return (
    <div className="App">{
      isLogged ? <TweetsPage/> : <LoginPage onLogin={handleLogin}/>}</div>
  );
}

export default App;