import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please Enter Your Name"),
  email: Yup.string()
    .required("Please Enter Your Email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Please enter a valid email address"
    ),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
