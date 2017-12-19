import {FieldTypes} from '../components/fields'

export interface Field {
  type: symbol,
  unit: string
}

export interface Model {
  name: string,
  fields: Map<string, Field>
}