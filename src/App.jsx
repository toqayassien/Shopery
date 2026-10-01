import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/HomeOne";
import About from "./Pages/About";
import MainLayout from "./Layouts/MainLayout";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import PagesLayout from "./Layouts/PagesLayout";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import SingleProductPage from "./Pages/SingleProductPage";
import SingleCategoryPage from "./Pages/SingleCategoryPage";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route element={<PagesLayout />}>
              <Route path="shop">
                <Route index element={<Shop />} />
                <Route path="products/:slug" element={<SingleProductPage />} />
                <Route path="categories/:slug" element={<SingleCategoryPage />} />
              </Route>

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="faq" element={<Faq />} />
              <Route path="blog" element={<Blog />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
