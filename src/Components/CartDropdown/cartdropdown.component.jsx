import Button from "../Button/button.component";
import "../CartDropdown/cartdropdown.styles.scss";
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
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item)=>
                    <CartItem key={item.id} cartItem={item}></CartItem>
                )}
            </div>
            <Button onClick = {goToCheckoutHandler}>Checkout</Button>
        </div>
    );

    }

export default CartDropdown;