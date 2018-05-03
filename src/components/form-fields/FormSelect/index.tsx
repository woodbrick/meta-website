import * as React from 'react';
import { Select } from 'antd';
import FormInput from '../FormInput';

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
export default FormSelect;
