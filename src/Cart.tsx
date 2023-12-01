import { useContext } from 'react';
import { ShopContext } from "./App";

// export function Cart() {

//     return (

//     )
// }

export function CartIcon() {
    const { count } = useContext(ShopContext)

    return (
        <div className="w3-bar-item w3-button w3-padding-large">{count}</div>
    )
}