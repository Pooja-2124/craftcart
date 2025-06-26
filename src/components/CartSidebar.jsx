import { useCart } from "../contexts/CartContext";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    toggleCart,
    isCartOpen,
    increaseQty,
    decreaseQty,
    setCartItems
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  

const navigate = useNavigate();

const handleCheckout = () => {
  if (cartItems.length === 0) {
    toast.error("Cart is empty");
    return;
  }

  new Audio("/order confirm.mp3").play();
  toast.success("Order placed successfully!");

  setTimeout(() => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    toggleCart();
    navigate("/order-confirmation");
  }, 1000);
};





  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-[#fff8f0] shadow-xl border-l border-orange-300 p-6 transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="cartSidebar"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-orange-800">🧺 Your Cart</h2>
          <button
            onClick={toggleCart}
            className="text-orange-600 text-sm hover:underline"
          >
            Close
          </button>
        </div>

        {/* Cart Items */}
        <ul className="space-y-4 overflow-y-auto max-h-[70vh] pr-1">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-start border-b pb-3"
            >
              <div className="flex-1">
                <p className="font-semibold text-orange-900">{item.name}</p>
                <small className="text-gray-500">₹{item.price}</small>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-orange-200 hover:bg-orange-300 text-orange-800 rounded text-sm"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-orange-200 hover:bg-orange-300 text-orange-800 rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price & Remove */}
              <div className="text-right">
                <p className="text-orange-700 font-medium">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Total Price */}
        <div className="mt-6 text-right text-lg font-bold text-orange-900 border-t pt-4">
          Total: ₹{total}
        </div>


        
<button
  onClick={handleCheckout}
  className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
>
  Place Order
</button>



      </div>
    </>
  );


  
}

export default CartSidebar;
