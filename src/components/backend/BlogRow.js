const BlogRow = (props) => {
  return (
    <>
      {props.blogData.map((item, index) => (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{item.date}</td>
          <td>
            <button
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "5px 12px",
                marginRight: "8px",
                cursor: "pointer"
              }}
              onClick={() => props.handleDelete(item.id)}
            >
              Delete
            </button>
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "5px 12px",
                marginRight: "8px",
                cursor: "pointer"
              }}
              onClick={() => props.handleBtnClickview(item.id)}
            >
              View
            </button>
            <button
              style={{
                background: "#fbbf24",
                color: "#222",
                border: "none",
                borderRadius: "4px",
                padding: "5px 12px",
                cursor: "pointer"
              }}
              onClick={() => props.handleBtnClick(item.id)}
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BlogRow;