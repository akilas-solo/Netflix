// App.js
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './fire/fireconf';
import { useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
         if(user){
          navigate('/');
          console.log("Loggd In");
         }else{
          navigate('/login');
          console.log("Logged out");
         }
    });
  })
  return (
    <div>
      <ToastContainer theme='dark'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/player/:id" element={<Player />} /> {/* Corrected route */}
    </Routes>
    </div>
  );
};

export default App;
