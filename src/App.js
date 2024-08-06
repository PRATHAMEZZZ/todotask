import "./App.css";
import TodoPage from "./Pages/TodoPage";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<ProtectedRoute element={TodoPage} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
