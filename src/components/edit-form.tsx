import * as React from 'react';
import { Modal, Form } from 'antd';
import InputType from '../components/form-fields';
import { observer, inject } from 'mobx-react';

@inject('pageStore')
@observer
class EditForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleOk = (e: any) => {
    this.props.pageStore.closeModal(e, false);
  }
  handleCancel = (e: any) => {
    this.props.pageStore.closeModal(e, false);
  }
  render() {
    let { pageStore } = this.props;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={pageStore.modalShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItems data={pageStore.rowData} fields={pageStore.model.fields} />
          </Form>
        </Modal>
      </div>
    );
  }
}
const FormItem = Form.Item;
function FormItems(props: any) {
  let { data, fields } = props;
  let formItems = fields.map((field: any) => (
    <FormItem label={field.title} key={field.dataIndex}>
      {React.createElement(field.editType || InputType.FormInput, {field: field, row: data})}
    </FormItem>
  ));
  return (
    <div>
      {formItems}
    </div>
  );
}
export default EditForm;
