import { NavLink } from 'react-router-dom';
const Header=()=>{
    return(
        <>
        <header>
    <nav className="d-flex flex-row justify-content-between pb-5  p-4 fs-4">
        <div className="text-warning fs-3 px-4">Khushboo Rai</div>
        <div className="">
            <NavLink to="/" className="p-2" >Home</NavLink>
            <NavLink to="/About"className="p-2" >About</NavLink>
            <NavLink to="/Resume"className="p-2">Resume</NavLink>
            <NavLink to="/Skills"className="p-2">Skills</NavLink>
            <NavLink to="/Contact"className="p-2">Contact</NavLink>
        </div>
    </nav>
</header>
        </>
    )
}
export default Header;