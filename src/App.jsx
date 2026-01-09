import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/cartContext";
import { Header } from "./components/header";
import { ProductList } from "./components/productList";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Route, ProtectedRoute } from "./pages/Router";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />

        <Route path="/">
          <ProductList />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/wishlist">
          <Wishlist />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
      </CartProvider>
    </AuthProvider>
  );
}
