import Button from "../Button/button.component";
import "../CartDropdown/cartdropdown.styles.scss";
import CartItem from "../CartItem/cartitem.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () =>{

    const {cartItems} = useContext(CartContext);

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item)=>
                    <CartItem key={item.id} cartItem={item}></CartItem>
                )}
            </div>
            <Button>Checkout</Button>
        </div>
    );

    }

export default CartDropdown;