import * as React from 'react';
import { FieldProps } from '../interface';

function TableSpan(props: FieldProps) {
  let {row, field} = props;
  return (
    <span>{row[field.propName]}</span>
  );
}

export {
  TableSpan
};
