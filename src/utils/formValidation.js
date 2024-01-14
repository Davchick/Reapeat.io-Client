import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Field must be a valid email")
    .max(45, "Email must be at most 45 characters")
    .required("Email is a required field"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must be at most 40 characters")
    .required("Password is a required field"),
  username: yup
    .string()
    .min(6, "Username must be at least 6 characters")
    .max(40, "Username must be at most 40 characters")
    .required("Username is a required field"),
  confirmPassword: yup
    .string()
    .required("Confirm password is a required field")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
