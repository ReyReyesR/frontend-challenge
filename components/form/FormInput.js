import { useField } from "formik";
import classes from "./input.module.css";

const ForrmInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={classes.input}>
      <label htmlFor={props.id || props.name}>{label}</label>
      {props.className === "text-input" ? (
        <input className={props.className} {...field} {...props} />
      ) : (
        <textarea className={props.className} {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div data-testid={`errors-${props.name}`} className={classes.error}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default ForrmInput;
