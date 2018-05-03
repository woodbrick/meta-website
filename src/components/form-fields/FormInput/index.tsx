import * as React from 'react';
import { Input } from 'antd';
import { FieldProps } from '../../interface';

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

export default FormInput;
