import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-[calc(100vh-229px)] py-12 mx-auto container">
        {/* Dynamic Layout */}
        <Outlet />{" "}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
