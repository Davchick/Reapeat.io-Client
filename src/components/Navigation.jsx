import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center space-x-8">
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/friends">Friends</NavLink>
      <NavLink className="link" to="/practice">Practice</NavLink>
      <NavLink className="link" to="/word-list">Word List</NavLink>
      <NavLink className="link" to="/collections">Collections</NavLink>
    </nav>
  );
};

export default Navigation;
