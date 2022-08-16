import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NewsFeed from "./pages/newsFeed/NewsFeed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import {useAuthContext} from "./hooks/useAuthContext";
import Cooperatives from "./pages/cooperatives/Cooperatives";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">

      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <NewsFeed /> : <Navigate to="/login" />} />
              <Route path="/cooperatives" element={user ? <Cooperatives /> : <Navigate to="/login" />} />

              {/* auth routes */}
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
