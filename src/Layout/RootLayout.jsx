import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
