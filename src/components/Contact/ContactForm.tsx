"use client";

import { Formik, Form } from "formik";
import FormField from "./FormField";
import TextAreaField from "./TextAreaField";
import { toast } from "react-toastify";
import { contactSchema } from "./Validation";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const handleSubmit = (values: ContactFormValues, resetForm: () => void) => {
    console.log("Form submitted:", values);

    // Show success toast
    toast.success("Message Sent Successfully!");

    // Reset form fields
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {() => (
        <Form className="card bg-base-100 shadow-xl p-6 space-y-4 w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>

          <FormField
            name="name"
            label="Your Name"
            placeholder="Enter your name"
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your Gmail"
          />
          <TextAreaField
            name="message"
            label="Message"
            placeholder="Write your message"
          />

          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
