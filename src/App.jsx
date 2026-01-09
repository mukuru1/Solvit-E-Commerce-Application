import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import { Header } from "./components/header";
import { ProductList } from "./components/productList";
import { Cart } from "./pages/cart";
import { Wishlist } from "./pages/wishlist";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Route, ProtectedRoute } from "./pages/router";

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
