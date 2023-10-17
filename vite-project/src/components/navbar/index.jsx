import {NavLink} from 'react-router-dom' ;

const NavBar = () => { 
    return(
        <nav>
            <ul>
                <li>
                    <NavLink
                    to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/">
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/clothes">
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/electronics">
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/furtinures">
                        Furtnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/toys">
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/others">
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    eduardani84@gmail.com
                </li>
                <li>
                    <NavLink
                    to="/my-orders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/my-account">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/sign-in">
                        Sign In
                    </NavLink>
                </li>
                <li>
                    Icon cart
                </li>
            </ul>
        </nav>
    )
}

export {NavBar}