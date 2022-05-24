import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import CartDropdown from "../../Components/CartDropdown/cartdropdown.component";
import CartIcon from "../../Components/CartIcon/carticon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import '../navigation/navigation.styles.scss'



const NavigationBar = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return(
      <>
        <nav className="navigation">
          <Link to ='/' className="logo-container">
            <CrownLogo className="logo"></CrownLogo>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
              SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>SIGNOUT</span>
              ):
              <Link className="nav-link" to='/auth'>
                SIGN IN 
              </Link>
            }
            <CartIcon></CartIcon>
          </div>
          {isCartOpen && <CartDropdown/>}
        </nav>
        <Outlet/>
      </>
    );
  }

export default NavigationBar;