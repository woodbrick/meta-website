import * as React from 'react';
import { Provider } from 'mobx-react';
import PagedTable from '../../components/paged-table';
import { pageStore } from '../../components/stores';
import { BackstageModel } from '../../models';
import EditForm from '../../components/edit-form';
import { Button } from 'antd';
import { Divider } from 'antd';

// let id = 0;
// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Frozen yoghurt2', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich2', 237, 9.0, 37, 4.3),
//   createData('Eclair2', 262, 16.0, 24, 6.0),
//   createData('Cupcake2', 305, 3.7, 67, 4.3),
//   createData('Gingerbread2', 356, 16.0, 49, 3.9),
// ];

interface EditTableProps {
  model: BackstageModel;
}
class EditTable extends React.Component<EditTableProps, any> {
  constructor(props: any) {
    super(props);
    let {model} = props;
    if (model.fields.filter((field: any) => field.dataIndex === 'operation')[0]) { return; }
    model.fields.push(
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: (text: string, record: any) => (
          <span className="table-operation">
            <a onClick={pageStore.showModal.bind(null, record)}>Edit</a>
            <Divider type="vertical" />
            <a href="#">Delete</a>
          </span>
        )
      }
    );
    pageStore.model = model;
  }
  render() {
    let {model} = this.props;
    let name = model.name;
    return (
      <Provider pageStore={pageStore}>
      <div>
        <div> {name} </div>
        <PagedTable columns={model.fields} url={model.url}/>
        <Button type="primary" className="create" onClick={pageStore.showModal}>Open</Button>
        <EditForm />
      </div>
      </Provider>
    );
  }
}

export default EditTable;
