import { createContext, useState } from "react";
import { useEffect } from "react";
const addCardItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id)
    //IF found ,increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id == productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem

        )
    }
    //return new array with modified cartItems/new cart item

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == cartItemToRemove.id);

    //check if the quantity qual to 1,if it is remove item from cart
    if(existingCartItem.quantity==1){
        return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id);

    }
    return cartItems.map((cartItem)=>
    cartItem.id==cartItemToRemove.id?
    {...cartItem,quantity:cartItem.quantity-1}
    :cartItem
    );
    //return back cartitems with matching cart item with reduced quantity
}
const clearCartItem=(cartItems,cartItemToClear)=>{
    return cartItems.filter((cartItem)=>cartItem.id!=cartItemToClear.id);

}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    cartCount: 0,
    CartTotal:0
    


});
/*
product
{
    id,
    name,
    price,
    imageUrl
}
Cart Item
{
    id,
    name,
    price,
    imageUrl,
    quantity

}
*/

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [CartTotal,setTotalCart]=useState([0]);
    useEffect(() => {
        const newCartTotal=cartItems.reduce(
         (total,cartItem)=>total+cartItem.quantity* cartItem.price,0
        );
        setTotalCart(newCartTotal);
         
         
     }, [cartItems]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd));

    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));

    }
    const clearItemFromCart= (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));

    }
    
   
    
   
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,removeCartItem,removeItemToCart,clearItemFromCart,CartTotal };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}