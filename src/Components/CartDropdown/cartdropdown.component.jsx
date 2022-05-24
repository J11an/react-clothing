import Button from "../Button/button.component";
import "../CartDropdown/cartdropdown.styles.scss";

const CartDropdown = () =>{

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>Checkout</Button>
        </div>
    );

    }

export default CartDropdown;