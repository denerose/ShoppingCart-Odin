import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from "./App";

export function Navbar() {
    const count = useContext(ShopContext) as number

    return (
        <nav className="w3-top">
            <div className="w3-bar w3-black w3-card">
                <Link to="/" className="w3-bar-item w3-button w3-padding-large">Home</Link>
                <Link to="shop" className="w3-bar-item w3-button w3-padding-large">Shop</Link>
                <div className="w3-bar-item w3-button w3-padding-large">{count}</div>
            </div>
        </nav>
    )
}