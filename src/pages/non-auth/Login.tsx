import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().max(20, 'Must be 20 characters or less').min(5, 'Must be 5 characters or more'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    },
  });

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p>{formik.errors.email}</p>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <p>{formik.errors.password}</p>
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submiting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Login;
