import * as yup from "yup";

const studentValidationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name cannot exceed 50 characters.")
    .required("First name is required."),

  lastName: yup
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name cannot exceed 50 characters.")
    .required("Last name is required."),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email address.")
    .required("Email is required."),

  phone: yup
    .string()
    .trim()
    .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number.")
    .required("Phone number is required."),

  age: yup
    .number()
    .typeError("Age must be a number.")
    .required("Age is required.")
    .integer("Age must be a whole number.")
    .min(1, "Age must be at least 1.")
    .max(120, "Age must be 120 or below."),

  gender: yup
    .string()
    .oneOf(["male", "female"], "Select a valid gender.")
    .required("Gender is required."),
});

export default studentValidationSchema;
