import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return(
        <div>
            {/* navbar section */}
            <Navbar/>
            {/* footer section */}
            <div className="min-h-[calc(100vh-285px)">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Root;