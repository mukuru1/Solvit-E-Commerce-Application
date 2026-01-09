import { useCart } from "../contexts/cartContext";

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (wishlist.length === 0)
    return <p className="text-center mt-10">Wishlist empty</p>;

  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      {wishlist.map((item) => (
        <div key={item.id} className="border p-4">
          <h3>{item.title}</h3>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default Wishlist;