import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Contact from "../Contact/Contact.jsx";
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* The Outlet component is used to render the child routes defined in the router configuration.  */}
      <Contact />
      <About />
      <Home />
      <Footer />
    </>
  );
}

export default Layout;
