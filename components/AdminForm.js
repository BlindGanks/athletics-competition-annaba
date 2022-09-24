import * as Yup from "yup";
import { useFormik } from "formik";
import { auth } from "../firebase";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";
import { memo } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AdminForm = () => {
  const [, setUser] = useRecoilState(userState);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: ({ email, password }) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          setUser({ ...user, isAdmin: true });
          formik.setSubmitting(false);
        })
        .catch((error) => {
          formik.setSubmitting(false);
          alert(error.message);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="admin-form">
      <span className="font-poppins font-semibold text-2xl mb-2 lg:mb-9 lg:text-[45px]">
        Admin
      </span>
      <div className="h-[1px] bg-[#707070] w-full mb-7 lg:mb-12"></div>
      <div className="flex flex-col items-start mb-[15px] lg:mb-10 w-full">
        <input
          name="email"
          placeholder="Email"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="input-error">{formik.errors.email}</span>
        ) : null}
      </div>
      <div className="flex flex-col items-start mb-[26px] lg:mb-14 w-full">
        <input
          placeholder="Mot De Passe"
          name="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="input-error">{formik.errors.password}</span>
        ) : null}
      </div>
      <button
        disabled={formik.isSubmitting}
        className={`w-full h-11 text-white font-poppins font-semibold text-xl rounded-full lg:h-[74px] ${
          formik.isValid && !formik.isSubmitting
            ? "bg-[#AE1010]"
            : "bg-[#AE1010]/40"
        }`}
        type="submit"
      >
        Connexion
      </button>
    </form>
  );
};

export default memo(AdminForm);
