import React from "react";
import { useNavigate } from "react-router";

const Blog = () => {
  const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/admin/blog/create');
    };
    const handleBtnClickview = () => {
        navigate('/admin/blog/view');
    };

  const blogs = [
    { id: 1, title: "React Basics", author: "John Doe", date: "2024-07-18" },
    { id: 2, title: "Advanced JS", author: "Jane Smith", date: "2024-07-17" },
  ];

  return (
    <div className = "blog">
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
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td >{blog.title}</td>
              <td>{blog.author}</td>
              <td>{blog.date}</td>
              <td>
                <button >
                  Delete
                </button>
                <button class onClick={handleBtnClickview}>
                  View
                </button>
                <button>
                 Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blog;