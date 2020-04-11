import React from 'react';
import { Form, Select } from 'antd';
import { GENDER } from 'enums/gender.enum';
import { IFormProps, FormInput } from 'components';

export const SignUpForm = (props: IFormProps) => {
  function ToArray(enumme: any) {
    return Object.keys(enumme).map(key => {
      return { key, value: enumme[key] };
    });
  }

  function handleSelectChange(value: string) {
    props.setFieldValue('gender', value);
  }

  return (
    <Form className="form" onSubmitCapture={props.handleSubmit}>
      <h2 className="form__title">SignUp</h2>
      <FormInput
        {...props}
        name="email"
        placeholder="E-mail"
        type="email"
      ></FormInput>
      <FormInput
        {...props}
        name="password"
        placeholder="Password"
        type="password"
      ></FormInput>
      <FormInput
        {...props}
        name="name"
        placeholder="Name"
        type="text"
      ></FormInput>
      <Form.Item>
        <Select
          id="gender"
          className="form__select"
          placeholder="Select your gender"
          onChange={handleSelectChange}
        >
          {ToArray(GENDER).map((gender, i) => {
            return (
              <Select.Option value={gender.key} key={gender.key}>
                {gender.value}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};
