export const getAllUsers = () => {
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      created: "2025-07-01"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      created: "2025-07-10"
    }
  ];
};

export const getUserById = (id) => {
  const users = getAllUsers();
  return users.find((user) => user.id === parseInt(id));
};