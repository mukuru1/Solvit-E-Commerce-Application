import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";

let currentPath = window.location.hash.slice(1) || "/";
let listeners = [];

export const navigate = (path) => {
  window.location.hash = path;
  currentPath = path;
  listeners.forEach((l) => l());
};

export const useNavigate = () => navigate;

export const useCurrentPath = () => {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const listener = () => setPath(window.location.hash.slice(1) || "/");
    listeners.push(listener);
    window.addEventListener("hashchange", listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return path;
};

export const Route = ({ path, children }) => {
  const current = useCurrentPath();
  return current === path ? children : null;
};

export const ProtectedRoute = ({ path, children }) => {
  const { isAuthenticated } = useAuth();
  const current = useCurrentPath();

  if (current === path && !isAuthenticated) {
    navigate("/login");
    return null;
  }

  return current === path ? children : null;
};
