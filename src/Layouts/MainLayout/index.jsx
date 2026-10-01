import { Outlet } from "react-router";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Newsletter from "../../Components/Newsletter";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter/>
      <Footer/>
    </>
  );
}
