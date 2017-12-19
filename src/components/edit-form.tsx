import * as React from 'react';
import { Modal, Button } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('pageStore')
@observer
class EditForm extends React.Component<any, any> {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e: any) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e: any) => {
    this.setState({
      visible: false,
    });
  }
  render() {
    let { pageStore } = this.props;
    return (
      <div>
        <Button type="primary" onClick={pageStore.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={pageStore.visible}
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
