import { Link, Outlet } from "react-router-dom";

function DashboardLayout(){
    return(
        <div>
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <sidebar>Sidebar</sidebar>
            <Outlet/>
            <footer>I will be at the bottom</footer>
        </div>
    )
}

export default DashboardLayout;