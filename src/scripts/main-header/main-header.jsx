import { NavLink, Link } from "react-router-dom"

export const MainHeader = () => {


    return (<section className="main-header flx-btween-end">

        {/* navigation */}
        <nav className="hdr-nav flx-btween-end obj-hover-anim">
            <span className="hdr-nav-link">
                <NavLink to="/" >Home</NavLink>
            </span>
            <span className="hdr-nav-link">
                <NavLink to="there" >There</NavLink>
            </span>
            <span className="hdr-nav-link">
                <NavLink to="/my-camps" >Camps</NavLink>
            </span>
        </nav>

        {/* main logo */}
        <span className="home-logo-cntnr obj-hover-anim">
            <Link to="/" >
                <h1 className="home-logo flx-btween-end">Camp Storehouse</h1>
            </Link>
        </span>

        {/* user area */}
        <nav className="user-hdr-nav flx-btween-end obj-hover-anim">
            <a className="login-logout-hdr-nav ">
                in\out placeholder
            </a>
            <a className="user-img-wrpr">
                <span className="user-nav-img">
                    <img src="/media/imgs/gen-user-logo.png" alt="" className="user-hdr-img" />
                </span>
                {/* <span className="user-nav-name">Stoopidface mcStupid</span> */}
            </a>
        </nav>
    </section>)
}