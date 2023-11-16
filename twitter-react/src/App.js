import TweetsPage from './pages/tweets/TweetsPage';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
          <TweetsPage dark={true}/>
          <Button/>
    </div>
  );
}

export default App;