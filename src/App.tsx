import './App.css'
import { Routes, Route } from "react-router";
import LandingPage from './pages/landing-page';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />  
      </Routes>
    </>
  )
}

export default App
