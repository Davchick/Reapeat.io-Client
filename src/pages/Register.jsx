import { ValidationSchema } from "../utils/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ky from "ky";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ValidationSchema),
  });

  const BASE_URL = ky.create({
    prefixUrl: import.meta.env.VITE_BASE_URL,
  });

  const onRegister = async (data) => {
    const loading = toast.loading("Please wait...");
    try {
      const res = await BASE_URL.post("auth/register", {
        json: data,
      }).json();
      console.log(res);

      toast.update(loading, {
        render: "Account created successfully",
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
      console.log(err.message);
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
    <div className="flex gap-y-20 flex-col-reverse  md:flex-row-reverse items-center justify-between w-full">
      {/* IMAGE (here will be ad of repeat.io mobile application in the future)*/}
      <img
        className="w-10/12 md:w-5/12 rounded-[30px]"
        src="./application.jpg"
        alt="Mobile app of Repeat.io"
      />

      <div className="w-10/12 md:w-5/12">
        <div className="space-y-2 mb-14">
          <h1 className="title">Sign up</h1>
          <p>To use this site you need to create an account.</p>
        </div>

        <form onSubmit={handleSubmit(onRegister)} className="space-y-6">
          <FormInput
            label="Username"
            type="text"
            name="username"
            error={errors.username ? errors.username.message : ""}
            register={register("username", {
              required: "Username is a required field",
            })}
          />
          <FormInput
            label="Email"
            type="text"
            name="email"
            error={errors.email ? errors.email.message : ""}
            register={register("email", {
              required: "Email is a required field",
            })}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            error={errors.password ? errors.password.message : ""}
            register={register("password", {
              required: "Password is a required field",
            })}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword ? errors.confirmPassword.message : ""}
            register={register("confirmPassword", {
              required: "Password does not match",
            })}
          />

          <button className="btn w-full rounded-md py-3" type="submit">
            Create account
          </button>
        </form>
        <p className="text-center mt-4 text-text/90">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline text-accent font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
