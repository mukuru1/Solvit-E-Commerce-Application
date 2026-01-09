import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export const ProductCard = ({ product }) => {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useCart();

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />

      <h3 className="font-bold mt-2">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>

      <p className="mt-2 font-bold text-green-600">${product.price}</p>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          <ShoppingCart size={16} /> Add
        </button>

        <button
          onClick={() =>
            isInWishlist(product.id)
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
        >
          <Heart
            className={
              isInWishlist(product.id) ? "text-red-500 fill-red-500" : ""
            }
          />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;