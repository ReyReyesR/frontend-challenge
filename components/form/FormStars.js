import { Field } from "formik";
import React from "react";
import ReactStars from "react-rating-stars-component";
import classes from "./input.module.css";

const FormStars = () => {
  return (
    <Field name="rating" type="number">
      {({ field: { name }, form: { setFieldValue }, meta }) => (
        <div className={classes.stars}>
          <div>
            <label>Rating</label>
            <ReactStars
              activeColor="#ffd700"
              count={5}
              name="rating"
              onChange={(number) => setFieldValue("rating", number)}
              size={36}
            />
            {meta.touched && meta.error ? (
              <div data-testid={`errors-${name}`} className={classes.error}>
                {"Please select a star rating"}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Field>
  );
};

export default FormStars;
