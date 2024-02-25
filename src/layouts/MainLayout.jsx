import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <p>Main Layout</p>
            <Outlet/>
        </div>
    );
};

export default MainLayout;