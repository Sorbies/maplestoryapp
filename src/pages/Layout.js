import {Outlet, Link} from "react-router-dom";

function Layout() {
    return (
      <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dailies">Dailies</Link></li>
                <li><Link to="/bossing">Bossing</Link></li>
                <li><Link to="/gear">Gear</Link></li>
            </ul>
        </nav>

        <Outlet/>
      </>
    );
  }
  
export default Layout;