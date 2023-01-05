import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListClient from './components/ListClient';
import CreateClient from './components/CreateClient';

function App() {
  return (
    <div className="App">
      <h5>Login</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">list clients</Link>
            </li>
            <li>
              <Link to="client/create">create client</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListClient />}/>
          <Route path="client/create" element={<CreateClient />}/>
          </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
