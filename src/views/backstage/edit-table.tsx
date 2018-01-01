import * as React from 'react';
import { Provider } from 'mobx-react';
import PagedTable from '../../components/paged-table';
import { pageStore } from '../../components/stores';
import { BackstageModel } from '../../models';
import EditForm from '../../components/edit-form';
import { Button } from 'antd';
import { Divider } from 'antd';

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
