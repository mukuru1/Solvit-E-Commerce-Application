import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "./router";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-10">
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};
export default Login;