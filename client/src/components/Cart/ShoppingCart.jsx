import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";
import React from 'react'
import formatCurrency from "../../utilities/formatCurrency";

const ShoppingCart = () => {
    const { cart, isOpen, toggleCart } = useShoppingCart();

    const productInCart = cart.find(product => product.id === product.id)
    const quantity = productInCart ? productInCart.quantity : 0

  return (
    <Offcanvas show={isOpen} onHide={toggleCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>My eCart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cart.length === 0 ?
                <>
                <div className="text-center text-muted">
                    Your cart is empty, 
                    <br />
                    <Link to="/products" onClick={toggleCart}>
                        Start Shopping
                    </Link>
                </div>
                </>
                :
                <>
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                <div className="fw-bold fs-5">
                    Total {" "}
                    {formatCurrency(
                        cart.reduce((total, product) => total + product.price * product.quantity, 0)
                    )}
                </div>
                <div className="fw-bold fs-5">
                    <button className="btn btn-primary">Checkout</button>
                </div>
                </div>
                </>
                } 
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart