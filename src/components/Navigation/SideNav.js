import ExitIcon from "./ExitIcon";

const SideNav = (props) => {

    return (
        <>
            <div className={`w-72 h-screen bg-dark-blue fixed transform transition-all ease-in-out duration-600 z-30 ${props.isOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                <div className="absolute right-0 p-1 cursor-pointer" onClick={props.setSideNav}>
                    <ExitIcon />
                </div>
                <ul className="text-white text-center mt-10 tracking-wider">
                    <li className="mt-2">Home</li>
                    <li className="mt-2">Projects</li>
                    <li className="mt-2">About</li>
                    <li className="mt-2">Contact</li>
                </ul>
            </div>
        </>
    )
}

export default SideNav