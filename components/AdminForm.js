import * as Yup from "yup";
import { useFormik } from "formik";

const AdminForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          placeholder="Email"
          id="email"
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
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="input-error">{formik.errors.password}</span>
        ) : null}
      </div>
      <button
        className="w-full h-11 bg-[#AE1010]/40 text-white font-poppins font-semibold text-xl rounded-full lg:h-[74px]"
        type="submit"
      >
        Connexion
      </button>
    </form>
  );
};

export default AdminForm;
