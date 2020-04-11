import { SignUpForm as SignUpFormComponent } from 'components';
import { withFormik } from 'formik';

export const SignUpForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    name: '',
    gender: '',
  }),
  enableReinitialize: true,
  validate: values => {
    let errors: { [key: string]: string } = {};

    if (!values.email) errors.email = 'Input E-Mail';
    if (!values.password) errors.password = 'Input password';
    if (!values.name) errors.name = 'Input name';

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values);
    // store.dispatch(userActions.fetchUserSignIn(values)).catch(() => {
    //   setSubmitting(false);
    // });
  },
  displayName: 'LoginForm',
})(SignUpFormComponent as any);
