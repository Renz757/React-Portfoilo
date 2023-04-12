import { useState } from 'react';
// use heroku icons, delete material UI library
import SideNav from './SideNav';
import Backdrop from './Overlay';
import useScroll from '../../hooks/useScroll';
import MenuIcon from './MenuIcon';
import { Link } from 'react-router-dom';
import Logo from '../../shared/src-images/Lorenzo-2.png'


// Top Navgation 
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [blockScroll, allowScroll] = useScroll();

    const sideNavHandler = () => {
        setIsOpen(!isOpen)
        console.log('click')

        isOpen ? allowScroll() : blockScroll() 
    }

    return (
        <>
            {isOpen && <Backdrop closeSideNav={sideNavHandler}/>}
            <nav className="flex justify-between items-center bg-dark-blue p-3" id="#home">
                <div className="">
                    <Link to="/home"><img className="w-14 h-14 rounded-full" src={Logo} alt="logo" /></Link>
                </div>

                <div className="hidden md:block mr-10">
                    <ul className="flex gap-x-3 mb-0">
                        <Link className="no-underline text-white p-0 m-0" to="/home">Home</Link>
                        <Link className="no-underline text-white" to="/projects">Projects</Link>
                        <Link className="no-underline text-white" to="/about">About</Link>
                        <Link className="no-underline text-white" to="/contact">Contact</Link>

                    </ul>
                </div>

                <div className="md:hidden cursor-pointer" onClick={sideNavHandler}>
                    <MenuIcon  />
                </div>

            </nav>
            <SideNav isOpen={isOpen} setSideNav={sideNavHandler}/>
        </>
    );
}

export default Header;