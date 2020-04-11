import { SignInForm as SignInFormComponent } from 'components';
import { withFormik } from 'formik';

export const SignInForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  enableReinitialize: true,
  validate: values => {
    let errors: { [key: string]: string } = {};

    if (!values.email) errors.email = 'Input E-Mail';
    if (!values.password) errors.password = 'Input password';

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values);
    // store.dispatch(userActions.fetchUserSignIn(values)).catch(() => {
    //   setSubmitting(false);
    // });
  },
  displayName: 'LoginForm',
})(SignInFormComponent as any);
