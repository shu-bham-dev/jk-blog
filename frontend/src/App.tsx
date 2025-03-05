import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import PrivateRoute from "./utils/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/create-post" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
