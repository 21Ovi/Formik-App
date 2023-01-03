import { useFormik } from "formik";

const BasicForm = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />

      <label htmlFor="email">age</label>
      <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={handleBlur}
      />

      <label htmlFor="email">Password</label>
      <input
        value={values.Password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="Password"
        type="Password"
        placeholder="Enter your Password"
      />

      <label htmlFor="email">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="Password"
        type="Password"
        placeholder="confirm your Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
