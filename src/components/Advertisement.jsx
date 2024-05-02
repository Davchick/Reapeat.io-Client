import { Link } from "react-router-dom";
import GooglePlay from "../UI/GooglePlay";
import AppStore from "../UI/AppStore";

const Advertisement = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        className="h-[630px]"
        src="./application.png"
        alt="WordKeep mobile application"
      />
      <div className="flex gap-7">
        <Link
          target="_blank"
          to="https://play.google.com/store/games?device=phone&hl=ru&gl=US"
          className="w-max flex items-center gap-2 bg-accent text-white py-2 px-3 rounded-md transition-colors duration-1000"
        >
          Google Play
          <GooglePlay />
        </Link>
        <Link
          target="_blank"
          to="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
          className="w-max flex items-center gap-2 bg-accent text-white py-2 px-3 rounded-md transition-colors duration-1000"
        >
          App Store
          <AppStore />
        </Link>
      </div>
    </div>
  );
};

export default Advertisement;
