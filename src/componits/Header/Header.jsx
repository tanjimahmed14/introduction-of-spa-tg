import {  NavLink, Outlet, useNavigation } from "react-router-dom";
import Fotter from "../Fotter/Fotter";
import './Header.css'


const Header = () => {
    const navigation = useNavigation();
    return (
        <div>
            <nav>
                <NavLink className="mr-4" to='/'>Home</NavLink>
                <NavLink className="mr-4" to='/users'>Users</NavLink>
                <NavLink className="mr-4" to='/posts'>Posts</NavLink>
                <NavLink className="mr-4" to='/mt'>No data</NavLink>
                <NavLink to='/about'>About</NavLink>
                
            </nav>
            {
                navigation.state === 'loading' ? <p className="text-5xl">loading...</p> :<Outlet></Outlet>
            }
            <Fotter></Fotter>
        </div>
    );
};

export default Header;