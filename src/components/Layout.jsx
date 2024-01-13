import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container flex flex-col h-screen">
      {/* HEADER & MAIN */}
      <div className="flex-[1_0_auto]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
