import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Registration from './components/Registration'
import Main from './views/Main';
import Welcome from './views/Welcome';
import Sidebar from './components/Sidebar';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/login" element={<Login />}/>
            <Route path='/register' element={<Registration />}/>
            <Route path='/main' element={<Main />}/>
            <Route path='/welcome' element={<Welcome />}/>
            <Route path='/sidebar' element={<Sidebar />}/>

          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;