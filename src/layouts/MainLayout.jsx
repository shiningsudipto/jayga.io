import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-gray1 3xl:px-[120px] px-[20px]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;