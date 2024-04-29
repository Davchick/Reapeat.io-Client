import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary border-t border-border mt-20">
     <div className="container">
        {/* FOOTER CONTENT */}
        <div className="text-2xl">
          {/* LOGOTYPE */}
          <Link to="/" className="">
            Word<span className="text-primary">Keep</span>
          </Link>
          {/* CONTACTS */}
          {/* Interest links */}
        </div>
        {/* COPYRIGHT BLOCK */}
        <div className="border-t border-border text-center py-5">
          <p>© 2024 WordKeep. All rights reserved.</p>
        </div>
     </div>
    </div>
  );
};

export default Footer;
