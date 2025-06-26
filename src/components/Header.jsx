import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

function Header() {
  const { toggleCart, cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <header className="bg-amber-600 text-white p-4 shadow flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        🛍️ CraftCart
      </Link>

      <div className="flex gap-4 items-center">
        {/* Wishlist Button */}
        <Link
          to="/wishlist"
          className="relative hover:text-yellow-300 font-medium"
        >
          ❤️ Wishlist
        
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
             
            </span>
          
        </Link>

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="relative hover:text-yellow-300 font-medium"
        >
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-1 text-xs">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
