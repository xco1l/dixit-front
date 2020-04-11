import React, { ChangeEvent } from 'react';
import { Input, Form } from 'antd';
import { FormInput } from 'components';

export const SignInForm = (props: IFormProps) => {
  return (
    <Form className="form" onSubmitCapture={props.handleSubmit}>
      <h2 className="form__title">SignIn</h2>
      <FormInput
        {...props}
        name="email"
        placeholder="E-mail"
        type="text"
      ></FormInput>
      <FormInput
        {...props}
        name="password"
        placeholder="Password"
        type="password"
      ></FormInput>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <button
          disabled={props.isSubmitting}
          type="submit"
          className="form__submit-button"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export interface IFormProps {
  values: {
    [key: string]: string;
  };
  touched: {
    [key: string]: string;
  };
  errors: {
    [key: string]: string;
  };
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setFieldValue: (key: string, value: string) => void;
}
