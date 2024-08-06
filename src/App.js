
import './App.css';
import UnAuthNavbar from './components/navbar/UnAuthNavbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <header className="App-header">
      <BrowserRouter>
      <UnAuthNavbar/>
    </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
