import * as React from 'react';
import { InputNumber } from 'antd';
import FormInput from '../FormInput';

class FormInputNumber extends FormInput {
  render() {
    let {row, field} = this.props;
    let value = row[field.dataIndex];
    value = parseInt(value, 10) || 0;
    let defaultValue = parseInt(field.defaultValue || '', 10) || 0;
    
    return (
      <InputNumber 
        value={value}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        formatter={field.formatter}
        size={field.size}
        onChange={this.onChange}
      />
    );
  }
}
export default FormInputNumber;
