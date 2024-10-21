import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

export const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
