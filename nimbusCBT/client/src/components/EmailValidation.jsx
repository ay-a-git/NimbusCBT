import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default function EmailValidator() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
<<<<<<< HEAD
          <label for="email">Email</label>
<<<<<<< HEAD
          <label htmlFor="email">Email</label>
=======
>>>>>>> adds basic email validator component
=======
          <label htmlFor="email">Email</label>
>>>>>>> Created test timer for messages to return to console
          <input
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
