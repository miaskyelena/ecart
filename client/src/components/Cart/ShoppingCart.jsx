import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import React from 'react'

const ShoppingCart = () => {
    const { cart, isOpen, toggleCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={toggleCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                <CartItem />
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart