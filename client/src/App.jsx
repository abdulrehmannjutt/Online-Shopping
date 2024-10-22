import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NoPage from "./pages/NoPage";
import SingleProduct from "./pages/SingleProduct";
import Login from "./components/LoginForm";
import SignUp from "./components/SignUpForm";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Admin from "./pages/Admin";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <ToastContainer
        toastClassName="custom-toast"
        position="top-left"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="products" element={<Products />} />
              <Route path="singleproduct" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="admin" element={<Admin />} />
            <Route path="pricing" element={<Pricing />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
