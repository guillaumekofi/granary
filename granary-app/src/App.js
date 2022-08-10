import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsFeed from "./pages/newsFeed/NewsFeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
