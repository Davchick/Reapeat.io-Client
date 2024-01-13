import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary border-t border-border flex-[0_0_auto]">
     <div className="container">
        {/* FOOTER CONTENT */}
        <div className="text-2xl">
          {/* LOGOTYPE */}
          <Link to="/" className="">
            Repeat<span className="text-primary">.io</span>
          </Link>
          {/* CONTACTS */}
          {/* Interest links */}
        </div>
        {/* COPYRIGHT BLOCK */}
        <div className="border-t border-border text-center py-5">
          <p>© 2024 Repeat.io. All rights reserved.</p>
        </div>
     </div>
    </div>
  );
};

export default Footer;
