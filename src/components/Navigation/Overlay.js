import React from "react"
import ReactDOM from "react-dom"

const Overlay = (props) => {
    return <div onClick={props.closeSideNav} className="fixed bg-dark-blue w-full h-screen overscroll-none cursor-pointer opacity-70 transition-all ease-in-out duration-600"></div>
}

const Backdrop = (props) => {
    return(
        <>
            {ReactDOM.createPortal(<Overlay closeSideNav={props.closeSideNav}/>, document.getElementById('backdrop-root'))}
        </>
    );
}

export default Backdrop