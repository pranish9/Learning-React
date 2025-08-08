export const getAllBlogs = () => {
    const data = [
    { id: 1, title: "React Basics", author: "John Doe", content: "2024-07-18" },
    { id: 2, title: "Advanced JS", author: "Jane Smith", content: "2024-07-17" },
    ]
    return data;
}
 export const getBlogById = (id) => {
    const blogs = getAllBlogs();
    return blogs.find((x) => x.id === parseInt(id));
 }