import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import {getAllBlogs} from "../../services/blog";
import BlogRow from "../../components/backend/BlogRow";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs,setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response);
    });
  }, [])


  const handleBtnClick = () => {
    navigate('/admin/blog/create');
  };
  const handleBtnClickview = () => {
    navigate('/admin/blog/view');
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
      console.log("Blog deleted:", id);
    }
  };

  return (
    <div className="blog">
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "18px" }}>
        <button onClick={handleBtnClick}>
          Add
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            <th>Title</th>
            <th>Author</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <BlogRow blogData={blogs} handleDelete={handleDelete} handleBtnClickview={handleBtnClickview} handleBtnClick={handleBtnClick} />
         
        </tbody>
      </table>
    </div>
  );
};

export default Blog;