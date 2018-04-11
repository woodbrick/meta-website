import * as React from 'react';
import { Input, InputNumber, Select } from 'antd';
import { FieldProps } from '../interface';

class FormInput extends React.Component<FieldProps, any> {
  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    let {row, field} = this.props;
    let value = row[field.dataIndex];
    return (
      <Input 
        value={value}
        placeholder={field.placeholder}
        defaultValue={field.defaultValue}
        addonBefore={field.prefix}
        addonAfter={field.suffix}
        size={field.size}
        onChange={this.onChange}
      />
    );
  }
  onChange(event: any) {
    let {row, field} = this.props;
    row[field.dataIndex] = event.target.value;
    this.setState({
      row
    });
  }
}
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

class FormSelect extends FormInput {
  onChange(value: any) {
    let {row, field} = this.props;
    row[field.dataIndex] = value;
    this.setState({
      row
    });
  }
  render() {
    let {field, row} = this.props;
    let value = row[field.dataIndex];
    return (
      <Select
        value={value}
        showSearch={true}
        placeholder={field.placeholder}
        optionFilterProp="children"
        onChange={this.onChange}
        filterOption={(input, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {field.options.map((entry: any) => (
          <Select.Option key={entry.value} value={entry.value}>{entry.text}</Select.Option>
        ))}
      </Select>
    );
  }
}

class FormInputName extends React.Component<FieldProps, any> {
  constructor(props: any) {
    super(props);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
  }
  render() {
    let {row, field} = this.props;
    let value = row[field.dataIndex] || {};
    return (
      <div>
        <Input 
          value={value.first}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          addonBefore={field.prefix}
          addonAfter={field.suffix}
          size={field.size}
          onChange={this.onChangeFirst}
        />
        <Input 
          value={value.last}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          addonBefore={field.prefix}
          addonAfter={field.suffix}
          size={field.size}
          onChange={this.onChangeLast}
        />
      </div>
    );
  }
  onChangeFirst(event: any) {
    let {row, field} = this.props;
    row[field.dataIndex].first = event.target.value;
    this.setState({
      row
    });
  }
  onChangeLast(event: any) {
    let {row, field} = this.props;
    row[field.dataIndex].last = event.target.value;
    this.setState({
      row
    });
  }
}

export default {
  FormInput,
  FormInputNumber,
  FormInputName,
  FormSelect,
};