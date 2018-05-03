import * as React from 'react';
import { Input } from 'antd';
import { FieldProps } from '../../interface';

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

export default FormInputName;
