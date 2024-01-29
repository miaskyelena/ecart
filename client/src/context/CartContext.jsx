import { createContext, useContext, useState } from "react"; 
import ShoppingCart from "../components/Cart/ShoppingCart";
const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}  

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };
    
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };
    
    const clearCart = () => {
        setCart([]);
    };

    const toggleCart = () => {
        setIsOpen((prev) => !prev);
    }
    
    return (
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isOpen,
            toggleCart,
        }}
        >
        {children}
        <ShoppingCart 
        cart={cart}
        isOpen={isOpen}
        toggleCart={toggleCart}
        />
        </CartContext.Provider>
    );
    }


