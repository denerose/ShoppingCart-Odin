import { useContext } from 'react';
import { ShopContext } from "./App";
import { Link } from "react-router-dom";

type Product = {
    name: string,
    desc: string,
    img: string,
    itemkey: string
}

export function Cart() {
    const { cartItems } = useContext(ShopContext)

    return (
        <div>
            <h1>CART</h1>
            <ul className='w3-ul'>
                {cartItems.map((item: Product) => (
                    <CartListItem
                        props={item}
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

    return (
        <li className='w3-bar'>
            <span>{props.name}</span>
        </li>
    )
}

