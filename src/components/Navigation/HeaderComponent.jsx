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
        window.scrollTo(0, 0)
        isOpen ? allowScroll() : blockScroll()
    }

    return (
        <>
            {isOpen && <Backdrop closeSideNav={sideNavHandler} />}
            <SideNav isOpen={isOpen} setSideNav={sideNavHandler} />
            <nav className="flex justify-between items-center bg-dark-blue p-5" id="#home">
                <Link className="no-underline text-accent-color" to="/home">
                    <div className="w-14 h-14 border-2 rounded-full flex justify-center items-center text-2xl">
                        L
                    </div>
                </Link>

                <div className="hidden md:block mr-10">
                    <ul className="flex gap-x-3 mb-0">
                        <Link className="no-underline text-off-white hover:text-accent-color lg:text-xl p-0 m-0" to="/home">Home</Link>
                        <Link className="no-underline text-off-white hover:text-accent-color lg:text-xl" to="/projects">Projects</Link>
                        <Link className="no-underline text-off-white hover:text-accent-color lg:text-xl" to="/about">About</Link>
                        <Link className="no-underline text-off-white hover:text-accent-color lg:text-xl" to="/contact">Contact</Link>
                    </ul>
                </div>

                <div className="md:hidden cursor-pointer text-off-white" onClick={sideNavHandler}>
                    <MenuIcon />
                </div>
            </nav>
        </>
    );
}

export default Header;