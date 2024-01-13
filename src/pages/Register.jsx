import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

const Register = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full">
      {/* IMAGE (here will be ad of repeat.io mobile application in the future)*/}
      <img
        className="w-5/12 rounded-[30px]"
        src="./application.jpg"
        alt="Mobile app of Repeat.io"
      />

      <div className="w-5/12">
        <div className="">
         <div className="space-y-2 mb-12">
            <h1 className="title">Register</h1>
            <p>
              To use this site you need to create an account.
            </p>
         </div>
          <form className="space-y-6">
            <FormInput
              label="Username"
              type="text"
              name="username"
            />
            <FormInput
              label="Email"
              type="text"
              name="email"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />

            <button className="btn w-full rounded-md py-3" type="submit">Create account</button>
          </form>
          <p className="text-center mt-4 text-text/90">
            Already have an account? <Link to="/login" className="hover:underline text-accent font-medium">Log in</Link>
          </p>
          {/* Trash */}
        </div>
      </div>
    </div>
  );
};

export default Register;
