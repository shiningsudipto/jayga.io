import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            Main Layout
            <Outlet/>
        </div>
    );
};

export default MainLayout;