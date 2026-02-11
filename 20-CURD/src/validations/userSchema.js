import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Name is required."),
  username: yup.string().required("Username is required."),
  email: yup.string().email("Invalid email").required("Email is required."),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .required("Age is required."),
});
