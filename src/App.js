import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const {user, authIsReady} = useAuthContext();
  // const navigate = useNavigate();
  return (
    <div className="App">
      { authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={user ? <Home /> : <Navigate to="/login"/>}>
           {/* {user && <Home />}
           {!user && <Navigate to="/login"/>} */}
          </Route>
         
          <Route path="/signup" 
          element={!user ? <Signup/> : <Navigate to="/"/> }>
           {/* {!user && <Signup />}
           {user && <Navigate to="/"/>} */}
          </Route>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}>
           {/* {!user && <Login />}
           {user && <Navigate to="/"/>} */}

          </Route>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
