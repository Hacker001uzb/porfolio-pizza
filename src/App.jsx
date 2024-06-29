
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Setting from './pages/Setting/Setting';
import Header from './components/Header/Header';
import Notpage from './pages/404/Notpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/*' element={<Notpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
