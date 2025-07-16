import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AuthLayout from "./Layout/AuthLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import RootLayout from "./Layout/RootLayout";
import About from "./pages/About";
import AddToCart from "./pages/AddToCart";
import AllUsers from "./pages/AllUsers";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import DashboardCart from "./pages/DashboardCart";
import EditUser from "./pages/EditUser";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Shop from "./pages/Shop";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        {/* Sidebar Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="addToCart" element={<AddToCart />} />
          <Route path="categories" element={<Categories />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="cart" element={<DashboardCart />} />
          <Route path="edit-product/:id" element={<AddToCart />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
