export interface BackstageField {
  title: string,
  dataIndex: string,
  sorter?: boolean,
  render?: Function,
  [propName: string]: any;
}

export interface BackstageModel {
  name: string,
  fields: BackstageField[],
  url: string
}
