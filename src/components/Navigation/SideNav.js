import ExitIcon from "./ExitIcon";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideNav = (props) => {

    return (
        <>
            <div className={`w-72 h-screen grid grid-row-2 p-5 bg-dark-blue fixed transform transition-all ease-in-out duration-600 z-30 ${props.isOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                <div className="justify-self-end p-1 cursor-pointer text-off-white" onClick={props.setSideNav}>
                    <ExitIcon />
                </div>
                <ul className="justify-self-center flex flex-col gap-3 font-Quicksand row-span-6 p-0 mt-10 tracking-wider text-3xl text-off-white">
                    <li className="mt-2" onClick={props.setSideNav}><Link className="no-underline" to="/home">Home</Link></li>
                    <li className="mt-2" onClick={props.setSideNav}><Link className="no-underline" to="/projects">Projects</Link></li>
                    <li className="mt-2" onClick={props.setSideNav}><Link className="no-underline" to="/about">About</Link></li>
                    <li className="mt-2" onClick={props.setSideNav}><Link className="no-underline" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default SideNav