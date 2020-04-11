import React from 'react';
import { Form, Input } from 'antd';
import { IFormProps } from 'components';

export const FormInput = ({
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  placeholder,
  name,
  type,
}: IFormInputProps) => {
  return (
    <Form.Item
      validateStatus={
        !touched[name]
          ? ''
          : isSubmitting
          ? ''
          : errors[name]
          ? 'error'
          : 'success'
      }
      help={!touched[name] ? '' : errors[name]}
      hasFeedback
    >
      <Input
        className="form__input"
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Form.Item>
  );
};

export interface IFormInputProps extends IFormProps {
  placeholder: string;
  name: string;
  type: string;
}
