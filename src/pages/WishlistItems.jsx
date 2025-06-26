import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

function WishlistItems() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>No items in wishlist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-amber-700">Your Wishlist ❤️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
<div
  key={item.id}
  className="bg-white shadow rounded p-4 flex flex-col justify-between h-full"
>
  <div>
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-60 object-cover rounded mb-2" // ⬅ Increased height
    />
    <h3 className="font-semibold text-lg">{item.name}</h3>
    <p className="text-gray-600 mb-2">₹{item.price}</p>
  </div>

  <div className="flex justify-between mt-auto">
    <button
      onClick={() => {
        addToCart({ ...item, quantity: 1 });
        // removeFromWishlist(item.id);
      }}
      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
    >
      Add to Cart
    </button>
    <button
      onClick={() => removeFromWishlist(item.id)}
      className="px-3 py-1 text-sm text-red-500 hover:underline"
    >
      Remove
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default WishlistItems;
