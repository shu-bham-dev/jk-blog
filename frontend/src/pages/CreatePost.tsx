import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios.post(
      "http://localhost:3000/posts",
      { title, body },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CreatePost;
