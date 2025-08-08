import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { getBlogById } from "../../services/blog"; // FIX: Import the correct function

const Create = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const [articleError, setArticleError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const navigate = useNavigate();

  useEffect(() => { 
    if (id) {
    getBlogById(id).then((response) => {
        setData(
          {
            ...data,
            title: response.title,
            content: response.content,
          }
        );
      });
    }
  }, []);

  const handleBtnClick = (e) => {
    e.preventDefault();
    let error = false;
    setTitleError("");
    setAuthorError("");
    setArticleError("");

    if (title === "") {
      setTitleError("Title is required");
      error = true;
    }
    if (author === "") {
      setAuthorError("Author is required");
      error = true;
    }
    if (article === "") {
      setArticleError("Article is required");
      error = true;
    }

    if (error) return;

    setTitle("");
    setAuthor("");
    setArticle("");
    alert("Blog post created successfully!");

    setTimeout(() => {
      navigate('/admin/blog/view');
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", background: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 2px 8px #e5e7eb" }}>
      { !id && <h2 style={{ marginBottom: "18px", textAlign: "center" }}>Add Blog Form</h2>}
      { id && <h2 style={{ marginBottom: "18px", textAlign: "center" }}> Edit Blog Form</h2>}
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #e5e7eb" }}
          />
          <div style={{ color: "red", fontSize: "0.95rem", minHeight: "16px" }}>{titleError}</div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #e5e7eb" }}
          />
          <div style={{ color: "red", fontSize: "0.95rem", minHeight: "16px" }}>{authorError}</div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Article</label>
          <input
            type="text"
            value={article}
            onChange={e => setArticle(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #e5e7eb" }}
          />
          <div style={{ color: "red", fontSize: "0.95rem", minHeight: "16px" }}>{articleError}</div>
        </div>
        <button
          type="submit"
          onClick={handleBtnClick}
          style={{
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Create;