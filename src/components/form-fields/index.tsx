import * as React from 'react';
import { Input, InputNumber, Select } from 'antd';
import { FieldProps } from '../interface';

class FormInputString extends React.Component<FieldProps, any> {
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
class FormInputNumber extends React.Component<FieldProps, any> {
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

interface FormSelectProps extends FieldProps {
  options: {}[];
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

class FormInputName extends React.Component<FieldProps, any> {
  render() {
    let {row, field} = this.props;
    let value = row[field.dataIndex];
    return (
      <div>
        <Input 
          value={value.first}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          addonBefore={field.prefix}
          addonAfter={field.suffix}
          size={field.size}
        />
        <Input 
          value={value.last}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          addonBefore={field.prefix}
          addonAfter={field.suffix}
          size={field.size}
        />
      </div>
    );
  }
}

export default {
  FormInputString,
  FormInputNumber,
  FormInputName,
  FormSelect,
};