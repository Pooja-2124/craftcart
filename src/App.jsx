import Header from "./components/Header";
import ProductCardGrid from "./components/ProductCardGrid";
import CartSidebar from "./components/CartSidebar";
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import OrderSuccess from "./pages/OrderSuccess"; // create this next
import WishlistItems from "./pages/WishlistItems";

function App() {
  return (
    <>
            <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen bg-gradient-to-br from-[#fffaf0] via-[#ffecd1] to-[#ffe1b3] text-gray-800 font-sans">
        {/* Header */}
        <Header />

        {/* Main content: Product Grid */}
        <main className="p-4">
        <Routes>
          <Route path="/" element={<ProductCardGrid />} />
          <Route path="/order-confirmation" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<WishlistItems />} />
        </Routes>
        </main>

        {/* Cart Sidebar */}
        <CartSidebar />
      </div>

    </>
  );
}

export default App;
