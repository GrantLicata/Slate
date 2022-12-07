import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Registration from './components/Registration'
import Main from './views/Main';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/main' element={<Main />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;