import * as React from 'react';
import { Rate } from 'antd';
import { FieldProps } from '../interface';

function TableSpan(props: FieldProps) {
  let {row, field} = props;
  return (
    <span>{row[field.propName]}</span>
  );
}
function TableRater(props: FieldProps) {
  let {row, field} = props;
  let value = row[field.propName];
  return (
    <Rate 
      disabled={true}
      value={value}
    />
  );
}
export {
  TableSpan,
  TableRater
};
