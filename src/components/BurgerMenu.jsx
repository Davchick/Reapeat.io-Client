import { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BURGER ICON */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <span
          className={isOpen === true ? "translate-y-2 -rotate-45" : ""}
        ></span>
        <span className={isOpen === true ? "opacity-0" : ""}></span>
        <span
          className={isOpen === true ? "-translate-y-[6px] rotate-45" : ""}
        ></span>
      </div>

      {/* OVERLAY */}
      <div
        className={
          isOpen === true
            ? "absolute block z-20 right-0 top-0 bg-text/10 w-screen h-screen space-y-6 p-8"
            : "hidden"
        }
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      {/* MOBILE NAVIGATION */}
      <nav
        className={
          isOpen === true
            ? "absolute !flex flex-col border-r z-20 border-border -left-5 top-0 bg-bg w-1/2 h-screen space-y-6 p-8"
            : "hidden"
        }
      >
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/friends">
          Friends
        </NavLink>
        <NavLink className="link" to="/practice">
          Practice
        </NavLink>
        <NavLink className="link" to="/word-list">
          Word List
        </NavLink>
        <NavLink className="link" to="/collections">
          Collections
        </NavLink>
      </nav>
    </>
  );
};
export default BurgerMenu;
