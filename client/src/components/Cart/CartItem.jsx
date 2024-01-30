import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext";
import formatCurrency from "../../utilities/formatCurrency";
import React from 'react'

const CartItem = ({ product }) => {
    const { removeFromCart, cart } = useShoppingCart();

    const handleRemoveFromCart = () => {
        removeFromCart(product.id)
    }

    const productInCart = cart.find(product => product.id === product.id)
    const quantity = productInCart ? productInCart.quantity : 0

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
        src={product.image}
        style={{ width: "125px", height: "75px", objectFit: "contain" }}
        ></img>
        <div className="me-auto">
            <div>
                {product.brand}
                {" "}
                <span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
                {formatCurrency(product.price)}
            </div>
        </div>
        <div className="text-bold"> 
            {formatCurrency(product.price * quantity)}
        </div>
        <Button 
        variant="outline-danger" 
        size="sm"
        onClick={handleRemoveFromCart}
        > 
            &times;
        </Button>
    </Stack>
  )
}

export default CartItem