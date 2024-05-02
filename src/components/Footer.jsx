import { Link } from "react-router-dom";
import Donations from "../UI/Donations";
import Telegram from "../UI/Telegram";
import GitHub from "../UI/GitHub";

const Footer = () => {
  return (
    <div className="bg-secondary border-t border-border mt-20 text-sm text-text/80">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl">
            <span className="text-text">Word</span><span className="text-primary">Keep</span>
          </Link>

          <div className="flex items-center py-3 gap-4">
            <span>Our links</span>
            <div className="flex items-center gap-2">
              <Link
                target="_blank"
                to="https://t.me/wordkeeptg"
                className="rounded-full p-2 border border-text/10 bg-gradient-to-tr from-bg to-text/5 hover:to-text/10 hover:bg-gradient-to-b hover:border-text/20"
              >
                <Telegram />
              </Link>
              <Link
                target="_blank"
                to="https://github.com/Davchick/WordKeep-Client"
                className="rounded-full p-2 border border-text/10 bg-gradient-to-tr from-bg to-text/5 hover:to-text/10 hover:bg-gradient-to-b hover:border-text/20"
              >
                <GitHub />
              </Link>
              <Link
                target="_blank"
                to="https://donationalerts.com/r/davchickweb"
                className="rounded-full p-2 border border-text/10 bg-gradient-to-tr from-bg to-text/5 hover:to-text/10 hover:bg-gradient-to-b hover:border-text/20"
              >
                <Donations />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-between border-t border-border text-center py-5">
          <p>© 2024 WordKeep. All rights reserved.</p>
          <p>Version 0.2.2</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
