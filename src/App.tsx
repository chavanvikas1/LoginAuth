import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Ragister from './Pages/Ragister';
import Dashboard from './component/Dashboard';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Dashboard' element={<ProtectedRoute element={<Dashboard/>}/>} />
        <Route path='/' element={<ProtectedRoute element={<Login/>}/>}/>
        <Route path='/ragisterUser' element={<ProtectedRoute element={<Ragister/>}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
