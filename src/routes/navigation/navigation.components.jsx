import { useContext } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import CartDropdown from "../../Components/CartDropdown/cartdropdown.component";
import CartIcon from "../../Components/CartIcon/carticon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import '../navigation/navigation.styles'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "../navigation/navigation.styles";



const NavigationBar = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return(
      <>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo/>
          </LogoContainer>
          <NavLinks>
          <NavLink to='/shop'>
              SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGNOUT</NavLink>
              ):
              <NavLink to='/auth'>
                SIGN IN 
              </NavLink>
            }
            <CartIcon></CartIcon>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </>
    );
  }

export default NavigationBar;