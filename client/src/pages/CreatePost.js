import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };
  const onSubmit = data => {
    axios.post('http://localhost:3001/posts', data).then(res => {
      if (res.statusText === 'OK' || res.status === 200) {
        navigate('/');
      }
    });
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must add a title!'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field id="inputCreatePost" name="title" placeholder="Eg. Title..." />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Eg. Post..."
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Eg. John123..."
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};
export default CreatePost;
