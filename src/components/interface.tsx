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
interface FieldProps {
  row: Row;
  field: Field;
}
export {
  Row,
  Field,
  FieldProps
};
