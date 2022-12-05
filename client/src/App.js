import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path='/registration' element={<Registration />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;