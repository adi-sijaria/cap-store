import { Outlet,Link} from "react-router-dom";
import { useState } from "react";
import { Fragment ,useContext} from "react";
import { UserContext } from "../../../Context/user.context";
import { CartIcon } from "../../../Components/cart-icon/cart-icon.component";
import CardDropdown from "../../../Components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../Context/cart.context";
import "./navigation.scss"
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { TRUE } from "sass";
import Checkout from "../../Checkout/Checkout.component";
const Navigation = () => {
  const{currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext)

  // const signOutHandler=async()=>{
  //   await signOutUser();
  //   setCurrentUser(null);
  // }
  // console.log(currentUser);
  // signOutUser();
 
  
    return (
        <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <div>Logo</div>
        </Link>
        <div className='nav-links-container'>
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser?(
              <span className="nav-link" onClick={signOutUser}>Sign-out</span>)
              :(<Link className="nav-link" to='/auth'>
              SIGNIN
            </Link>
            )
          }    
        </div>
        <CartIcon />
        {/* {Carddrop?<CardDropdown/>:<></>} */}
        {isCartOpen && <CardDropdown/>}
      </div>
        <Outlet/>
      </Fragment>
    )
  
  };
  export default Navigation;