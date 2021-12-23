import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormStars from "./FormStars";
import classes from "./form.module.css";
import FormInput from "./FormInput";
import postReview from "../../helpers/postReview";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import Button from "../ui/button";

const FormContainer = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  return (
    <Formik
      initialValues={{
        comment: "",
        email: "",
        fullName: "",
        rating: null,
        title: "",
      }}
      validationSchema={Yup.object({
        comment: Yup.string().required("Don't be shy, give us your two cents!"),
        fullName: Yup.string().required("We need your name for the review"),
        email: Yup.string()
          .email("Invalid email addresss")
          .required("We need your email address"),
        rating: Yup.number().required("Please select a star rating"),
        title: Yup.string().required("Please enter a headline"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const sent = await postReview(values);
        if (sent) {
          addToast(
            "Thank you for your feedback, you will be redirected shortly",
            { appearance: "success" }
          );
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          addToast(
            "There seems to be an issue with our APIs, please try again later",
            { appearance: "error" }
          );
        }
        setSubmitting(false);
      }}
    >
      <Form className={classes.form} noValidate>
        <FormInput
          className="text-input"
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Jane Doe"
        />
        <FormInput
          className="text-input"
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane.doe@email.com"
        />
        <FormInput
          className="text-input"
          label="Review Title"
          name="title"
          type="text"
          placeholder="Give your review a nice headline"
        />
        <FormStars />
        <FormInput
          className="text-area"
          label="Add a review"
          rows="6"
          name="comment"
          placeholder="Please share your review of our product"
        />
        <Button>Submit</Button>
      </Form>
    </Formik>
  );
};

export default FormContainer;
