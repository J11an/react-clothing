import Button from "../Button/button.component";
import {CartDropdownContainer, EmptyMessage, CartItems} from "../CartDropdown/cartdropdown.styles";
import CartItem from "../CartItem/cartitem.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () =>{

    const navigate = useNavigate();

    const {cartItems} = useContext(CartContext);

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item)=>
                    <CartItem key={item.id} cartItem={item}></CartItem>)
                ) : (
                    <EmptyMessage>Cart is empty</EmptyMessage>
                )
                    
                
                }
            </CartItems>
            <Button onClick = {goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    );

    }

export default CartDropdown;