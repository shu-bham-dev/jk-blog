import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext)!;
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    axios
      .get("http://localhost:3000/posts", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((res) => setPosts(res.data))
      .catch(() => logout());
  }, [user, logout, navigate]);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={logout}>Logout</button>
      <h3>Your Posts</h3>
      <button onClick={() => navigate("/create-post")}>Create New Post</button>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
