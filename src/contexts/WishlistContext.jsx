import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext=createContext();

export const useWishlist = () => useContext(WishlistContext)



export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const stored = localStorage.getItem("wishlistItems");
    return stored ? JSON.parse(stored) : [];
  });


const addToWishlist = (product) =>{
const exists = wishlistItems.find((item)=> item.id === product.id)
if(!exists){
    setWishlistItems((prev)=> [...prev,product]);
    toast.success("Added to wishlist")
}
else{
    toast("Already in Wishlist!");
}
}

const removeFromWishlist = (id) =>{
    setWishlistItems((prev)=>prev.filter((item)=> item.id!== id));
    toast('Removed From Wishlist');
}

useEffect(()=>{
localStorage.setItem("wishlistItems",JSON.stringify(wishlistItems))
},[wishlistItems])


return(
    <WishlistContext.Provider
    
    value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist
    }}
    >

     {children}
    </WishlistContext.Provider>
)
}