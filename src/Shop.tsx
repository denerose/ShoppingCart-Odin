import { Outlet, Link } from "react-router-dom";

export function Shop() {

    return (
        <div className="w3-container">
            <h2>This will be the shop page</h2>
            <Outlet />
            <Link to="/">HOME</Link>
        </div>
    )
}