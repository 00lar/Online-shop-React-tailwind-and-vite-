import {NavLink} from 'react-router-dom' ;

const NavBar = () => { 
    const activeStyle = " underline underline-offset-4"
    return(
        <nav className='w-full flex justify-between items-center fixed z-10 py-5 px-8 top-0 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className=' font-semibold text-lg'>
                    <NavLink
                    to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined 
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/clothes"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Electronics"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Furnitures"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Furtnitures
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Toys"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Toys
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Others"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className=' text-black/60'>
                    eduardani84@gmail.com
                </li>
                <li>
                <NavLink
                    to="/My-Orders"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/My-Account"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        My Account
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/SignIn"
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
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