import * as React from 'react';
import { Modal } from 'antd';
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
    this.props.pageStore.showModal(false);
  }
  handleCancel = (e: any) => {
    this.props.pageStore.showModal(false);
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
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default EditForm;
