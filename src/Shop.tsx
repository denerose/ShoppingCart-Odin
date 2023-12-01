import { Outlet } from "react-router-dom";

export function Shop() {

    return (
        <div>
            <h1>This will be the shop page</h1>
            <Outlet />
        </div>
    )
}