import { useContext } from 'react';
import { ShopContext } from "./App";
import { Link } from "react-router-dom";

type Product = {
    name: string,
    desc: string,
    img: string,
    price: number,
    itemkey: string,
    uid: string
}

export function Cart() {
    const { cartItems } = useContext(ShopContext)

    return (
        <div>
            <h1>CART</h1>
            <ul className='w3-ul'>
                {cartItems.map((item: Product) => (
                    <CartListItem
                        name={item.name}
                        uid={item.uid}
                        key={crypto.randomUUID()}
                    />
                )
                )}
            </ul>
        </div>
    )
}

export function CartIcon() {
    const { cartItems } = useContext(ShopContext)

    return (
        <Link to="shop/cart" className="w3-bar-item w3-button w3-padding-large">{String(cartItems.length)}</Link>
    )
}

function CartListItem(props) {
    const { cartItems, setCartItems } = useContext(ShopContext)

    return (
        <li className='w3-bar'>
            <span>{props.name}</span>
            <span onClick={() => removeCartItem(props.uid, cartItems, setCartItems)} className="w3-bar-item w3-button w3-xlarge w3-right">&times;</span>
        </li>
    )
}

function removeCartItem(keyToRemove: string, cartItems: Product[], setCartItems) {

    const newList = cartItems.filter((item: Product) => item.uid !== keyToRemove)
    console.log(newList)
    setCartItems(newList)
}

