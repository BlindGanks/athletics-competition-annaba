import { useFormik } from "formik";
import { memo } from "react";
import * as Yup from "yup";
import {
  addDoc,
  collection,
  getCountFromServer,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const ModalForm = ({ setModalVisible }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Doit contenir 15 caractères ou moins")
        .required("Ce champ est obligatoire"),
      lastName: Yup.string()
        .max(20, "Doit contenir 20 caractères ou moins")
        .required("Ce champ est obligatoire"),
      email: Yup.string()
        .email("Adresse e-mail invalide")
        .required("Ce champ est obligatoire"),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      const { email, firstName, lastName } = values;
      const docData = {
        email,
        firstName,
        lastName,
        dateSent: new Date().toString(),
      };
      const request = await fetch("/api/send-participation-req", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(docData),
      }).then((res) => res.json());

      setModalVisible(false);
      formik.resetForm();
      formik.setSubmitting(false);

      if (!request.success) {
        toast.error(
          "échec de l'envoi de la demande de participation, veuillez réessayer dans quelques instants."
        );
        console.error(request.error);
        return;
      }
      toast.success(
        "votre demande de participation a été envoyée avec succès."
      );
    },
  });

  const { isValid, isSubmitting, isValidating } = formik;

  return (
    <form className="participation-form" onSubmit={formik.handleSubmit}>
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
      <button
        disabled={isSubmitting || !isValid || isValidating}
        type="submit"
        className={`${
          isSubmitting || !isValid ? "bg-[#AE1010]/40" : "bg-[#AE1010]"
        } uppercase px-14 py-[14px] text-center font-semibold text-white rounded-full mt-10`}
      >
        participer
      </button>
    </form>
  );
};

export default memo(ModalForm);
