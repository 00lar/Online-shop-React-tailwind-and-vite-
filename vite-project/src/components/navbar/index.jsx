import {NavLink} from 'react-router-dom' ;
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { BagIcon } from '../Icons';

const NavBar = () => { 
    const activeStyle = " underline underline-offset-4"
    const context = useContext(ShoppingCartContext)

    return(
        <nav className='w-full flex justify-between items-center fixed z-10 py-5 px-8 top-0 text-sm font-light bg-white'>
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
                    }
                    onClick={() => context.setSearchByCategory()}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/clothes"
                    onClick={() => context.setSearchByCategory("clothes")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="electronics"
                    onClick={() => context.setSearchByCategory("electronics")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="furnitures"
                    onClick={() => context.setSearchByCategory("furnitures")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Furtnitures
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/toys"
                    onClick={() => context.setSearchByCategory("toys")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined 
                }>
                        Toys
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/others"
                    onClick={() => context.setSearchByCategory("others")}
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
                <li className='flex'>
                <BagIcon/>
                    <div className='flex items-center'>
                        {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export {NavBar}