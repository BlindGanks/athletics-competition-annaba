import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const ModalForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="modal-form" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-start mb-[15px]">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span className="input-error">{formik.errors.firstName}</span>
        ) : null}
      </div>
      <div className="flex flex-col items-start mb-[15px]">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span className="input-error">{formik.errors.lastName}</span>
        ) : null}
      </div>
      <div className="flex flex-col items-start mb-[15px]">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <span className="input-error">{formik.errors.email}</span>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalForm;