import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext";
import React from 'react'

const CartItem = () => {
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
        src="https://via.placeholder.com/150"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        ></img>
        <div className="me-auto">
            <div>
                name{" "}
                <span className="text-muted" style={{ fontSize: ".65rem" }}>x1</span>
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>price</div>
        </div>
        <div> 
            $100.00
        </div>
        <Button variant="outline-danger" size="sm"> 
            Remove
        </Button>
    </Stack>
  )
}

export default CartItem