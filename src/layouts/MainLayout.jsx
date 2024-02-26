import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-gray1 px-[120px]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;