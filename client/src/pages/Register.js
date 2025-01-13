import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(6).max(20).required(),
  });

  const onSubmit = data => {
    axios.post('http://localhost:3001/auth', data).then(res => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Eg. John123..."
          />
          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            id="inputCreatePost"
            type="password"
            name="password"
            placeholder="Your Password..."
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Register;
