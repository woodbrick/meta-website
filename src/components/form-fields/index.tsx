import * as React from 'react';
import { Input, InputNumber, Select } from 'antd';

interface Row {
  id: number;
  [propName: string]: any;
}
interface Field {
  propName: string;
  defaultValue?: string;
  suffix?: string;
  prefix?: string;
  placeholder?: string;
  size?: 'large' | 'default' | 'small';
  [propName: string]: any;
}
interface FormInputProps {
  row: Row;
  field: Field;
}
class FormInputString extends React.Component<FormInputProps, any> {
  render() {
    let {row, field} = this.props;
    let value = row[field.propName];
    return (
      <Input 
        value={value}
        placeholder={field.placeholder}
        defaultValue={field.defaultValue}
        addonBefore={field.prefix}
        addonAfter={field.suffix}
        size={field.size}
      />
    );
  }
}
class FormInputNumber extends React.Component<FormInputProps, any> {
  render() {
    let {row, field} = this.props;
    let value = row[field.propName];
    value = parseInt(value, 10) || 0;
    let defaultValue = parseInt(field.defaultValue || '', 10) || 0;
    
    return (
      <InputNumber 
        value={value}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        formatter={field.formatter}
        size={field.size}
      />
    );
  }
}

interface FormSelectProps {
  options: {}[];
  field: Field;
}
class FormSelect extends React.Component<FormSelectProps, any> {
  handleChange(value: any) {
    throw `selected ${value}`;
  }
  render() {
    let {options, field} = this.props;
    return (
      <Select
        showSearch={true}
        placeholder={field.placeholder}
        optionFilterProp="children"
        onChange={this.handleChange}
        filterOption={(input, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {options.map((entry: any) => (
          <Select.Option value={entry.key}>{entry.value}</Select.Option>
        ))}
      </Select>
    );
  }
}
export {
  FormInputString,
  FormInputNumber,
  FormSelect
};