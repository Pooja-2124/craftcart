import { createContext , useContext, useEffect, useState} from "react";
import Header from "../components/Header";
import { toast } from 'react-hot-toast';


export const CartContext=createContext();


export const useCart = () => {
    return useContext(CartContext);
} 

export const CartProvider=({children})=>{
    // const [cartItems,setCartItems]=useState([]);

  const [cartItems, setCartItems] = useState(() => {
  const stored = localStorage.getItem("cartItems");
  return stored ? JSON.parse(stored) : [];
});



    const [isCartOpen,setIsCartOpen]=useState(false);

    const addToCart=(product)=>{
        const exists=cartItems.find((item)=>item.id === product.id)
        if(exists){
            setCartItems((prev)=>prev.map((item)=> item.id === product.id ? {...item,quantity:item.quantity+1}:item));

        }
        else{
          setCartItems((prev)=>[...prev,{...product,quantity:1}]);
          toast.success("Item added to cart!");
        }
    };


    const removeFromCart=(id)=>{
        setCartItems((prev)=>prev.filter((item)=> item.id !== id))
        toast.error("item removed from cart")
    };


    const toggleCart=()=>{
        setIsCartOpen((prev)=>(!prev));
    }


    const increaseQty=(id)=>{
      setCartItems((prev)=>prev.map((item)=>item.id === id ? {...item,quantity:item.quantity+1} : item))
      toast.success("Quantity increased");
    }

    const decreaseQty=(id)=>{
      setCartItems((prev)=> prev.map((item)=> item.id ===id && item.quantity>1 ? {...item,quantity:item.quantity-1} : item).filter((item)=> item.quantity>0))
      toast.success("Quantity decreased");
    }



    useEffect(()=>{
      const storedCart=localStorage.getItem("cartItems");
      if(storedCart){
        setCartItems(JSON.parse(storedCart))
      }
    },[])


    useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems])


     return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        toggleCart,
        increaseQty,
        decreaseQty,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
 )
}

