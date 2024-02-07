import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="flex items-center justify-between h-16 border-b border-border mb-10">
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
      <div className="flex items-center space-x-3 sm:space-x-5">
        {/* BUTTONS OR AVATAR*/}
        {currentUser ? (
          <Link to="/profile" className="cursor-pointer flex items-center space-x-2 md:space-x-3" >
            <span className="text-[17px]">{currentUser.username}</span>
            <img className="h-11 md:h-12 rounded-full" src={currentUser.avatar} alt="" />
          </Link>
        ) : (
          <div className="flex sm:gap-6 gap-3 items-center">
            <Link to="/login" className="link">
              Log in
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        )}
        {/* BURGER MENU */}
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
