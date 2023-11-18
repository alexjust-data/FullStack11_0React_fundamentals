import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';



function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en true

  return (
    <div className="App">
      {isLogged ? ( 
        <TweetsPage onLogout={handleLogout} />
        ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;