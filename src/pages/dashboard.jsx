import { useState } from "react";
import api from "../api/axios";

export const Dashboard = () => {
  const [message, setMessage] = useState("");

  const createProduct = async () => {
    const res = await api.post("/products/add", {
      title: "New Product",
      price: 99,
    });
    setMessage(`Created product ID ${res.data.id}`);
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <button onClick={createProduct}>Create Product</button>
      {message && <p>{message}</p>}
    </div>
  );
};
export default Dashboard;