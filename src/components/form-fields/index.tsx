import * as React from 'react';
import { Input } from 'antd';

interface FormInputProps {
  value: string|null;
  defaultValue?: string;
  suffix?: string;
  placeholder?: string;
  size?: 'large' | 'default' | 'small';
}
class FormInput extends React.Component<FormInputProps, any> {
  render() {
    let {value, placeholder, suffix, defaultValue, size} = this.props;
    return (
      <Input 
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        addonAfter={suffix}
        size={size}
      />
    );
  }
}

export {
  FormInput
};