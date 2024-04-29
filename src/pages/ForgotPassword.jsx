import { Link } from "react-router-dom";
import FormInput from "../components/FormInput"

const ForgotPassword = () => {
  return (
    <div className="flex gap-y-20  flex-col-reverse items-center justify-between w-full md:flex-row-reverse">
      {/* IMAGE (here will be ad of repeat.io mobile application in the future)*/}
      <img
        className="w-10/12 md:w-5/12 rounded-[30px]"
        src="./application.jpg"
        alt="Mobile app of Repeat.io"
      />

      <div className="w-10/12 md:w-5/12">
        <Link to="/login" className="flex items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back to login
        </Link>

        <h1>Forgot your password?</h1>
        <p>Do not worry, this happens to all of us. Enter your email address below to recover your password.</p>

        <form action="">
          <FormInput/>
        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;
