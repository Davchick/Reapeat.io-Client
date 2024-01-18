import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="container flex flex-col">
        {/* HEADER & MAIN */}
        <div className="flex-[1_0_auto]">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
