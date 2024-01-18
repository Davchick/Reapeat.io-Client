import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 border-b border-border mb-20">
      <div className="flex items-center space-x-36">
        {/* LOGOTYPE */}
        <div className="text-2xl">
          <Link to="/" className="">
            Repeat<span className="text-primary">.io</span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <Navigation />
      </div>
      <div className="flex items-center  space-x-5">
        {/* BUTTONS */}
        <div className="flex gap-6 items-center">
          <Link to="/login" className="link">
            Log in
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
        {/* BURGER MENU */}
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
