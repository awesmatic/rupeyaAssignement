
import { Route, Routes } from "react-router-dom";
import './App.css';
import ErrorPage from './Pages/Error/ErrorPage';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from "./Pages/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
