import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4 text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostDetail;
