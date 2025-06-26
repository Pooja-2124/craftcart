import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import products from "../data/products"
import { useWishlist } from "../contexts/WishlistContext";


function ProductCardGrid() {
  const { addToCart, cartItems } = useCart()
const[searchTerm,setSearchTerm] = useState("")
const [selectedCategory, setSelectedCategory] = useState("All");

  const isInCart = (id) => cartItems.some((item) => item.id === id)

    // Extract unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts=
  products
  .filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  )
  .filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
)




const { wishlistItems, addToWishlist } = useWishlist();
const isInWishlist = (id) => wishlistItems.some((item)=> item.id === id)



  return (
    <>
    
<div className="max-w-4xl mx-auto mb-4 flex items-center gap-4">
  <input
    type="text"
    placeholder="Search products..."
    className="flex-grow px-4 py-2 border rounded"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="px-4 py-2 rounded border border-gray-400 bg-white text-amber-700 font-semibold hover:bg-amber-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
  >
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>



      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="bg-[#fff8f0] border border-[#e0b973] p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 border border-yellow-300"
              />

              <h2 className="text-xl font-bold text-[#8b4513]">{product.name}</h2>
              <p className="text-[#d2691e] text-lg mt-1">₹{product.price}</p>
            </div>

            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              disabled={isInCart(product.id)}
              className={`mt-6 px-4 py-2 rounded-lg text-white font-semibold tracking-wide ${
                isInCart(product.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
              }`}
            >
              {isInCart(product.id) ? "In Cart" : "Add to Cart"}
            </button>

            <button
  onClick={() => addToWishlist(product)}
  disabled={isInWishlist(product.id)}
  className={`mt-2 text-sm px-3 py-1 rounded border ${
    isInWishlist(product.id)
      ? "text-pink-400 border-pink-300 cursor-not-allowed"
      : "text-pink-600 border-pink-600 hover:bg-pink-50"
  }`}
>
  {isInWishlist(product.id) ? "❤️ Wishlisted" : "🤍 Wishlist"}
</button>
          </article>
        ))}
      </main>
    </>
  )
}

export default ProductCardGrid
