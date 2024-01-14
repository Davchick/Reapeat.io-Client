import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ky from "ky";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const BASE_URL = ky.create({
    prefixUrl: import.meta.env.VITE_BASE_URL,
  });

  const onLogin = async (data) => {
    const loading = toast.loading("Please wait...");
    try {
      const res = await BASE_URL.post("auth/login", {
        json: data,
      }).json();
      console.log(res);

      toast.update(loading, {
        render: "You logged in successfully",
        type: "success",
        isLoading: false,
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.update(loading, {
        render: err.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between w-full">
      {/* IMAGE (here will be ad of repeat.io mobile application in the future)*/}
      <img
        className="w-5/12 rounded-[30px]"
        src="./application.jpg"
        alt="Mobile app of Repeat.io"
      />

      <div className="w-5/12">
        <div className="space-y-2 mb-12">
          <h1 className="title">Log in</h1>
          <p>To use this site you need to log in.</p>
        </div>

        <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-6">
          <FormInput
            label="Email or Username"
            type="text"
            name="credentials"
            register={register("credentials", {
              required: "This is a required field",
            })}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            register={register("password", {
              required: "Password is a required field",
            })}
          />
          <Link to="/forgot" className="hover:underline text-accent self">Forgot Password?</Link>
          <button className="btn w-full rounded-md py-3" type="submit">
            Submit
          </button>
        </form>
        <p className="text-center mt-4 text-text/90">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="hover:underline text-accent font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
