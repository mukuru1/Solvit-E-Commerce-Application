import { useCart } from "../contexts/cartContext";

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0)
    return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <h3>{item.title}</h3>
          <div>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
    </div>
  );
};
