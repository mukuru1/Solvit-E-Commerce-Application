import {
  ShoppingCart,
  Heart,
  LayoutDashboard,
  LogOut,
  LogIn,
  Store,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/cartContext";
import { navigate, useCurrentPath } from "../pages/Router";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { getCartItemsCount, wishlist } = useCart();
  const currentPath = useCurrentPath();

  const isActive = (path) =>
    currentPath === path ? "text-blue-600 font-semibold" : "text-gray-700";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <Store /> E-Shop
        </button>

        <nav className="flex gap-6 items-center">
          <button onClick={() => navigate("/")} className={isActive("/")}>
            Products
          </button>

          <button onClick={() => navigate("/cart")} className={isActive("/cart")}>
            <ShoppingCart /> ({getCartItemsCount()})
          </button>

          <button
            onClick={() => navigate("/wishlist")}
            className={isActive("/wishlist")}
          >
            <Heart /> ({wishlist.length})
          </button>

          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className={isActive("/dashboard")}
              >
                <LayoutDashboard /> Dashboard
              </button>

              <span className="text-sm">Hello, {user?.firstName}</span>

              <button onClick={handleLogout} className="text-red-600">
                <LogOut /> Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/login")} className={isActive("/login")}>
              <LogIn /> Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;