
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table } from 'antd';
import { Pagination } from 'antd';

@inject('pageStore')
@observer
class PagedSyncTable extends React.Component<any, any> {
  handleChange() {
    throw 'PagedSyncTable.handleChange';
  }
  render() {
    let {pageStore} = this.props;
    return (
      <div>
        <Table columns={pageStore.cols} dataSource={pageStore.rows} onChange={this.handleChange} />
        <Pagination 
          defaultCurrent={1}
          total={pageStore.total} 
          pageSize={pageStore.pageSize}
          onChange={pageStore.changePage}
          onShowSizeChange={pageStore.changePageSize}
        />
      </div>
    );
  } // render
}

export default PagedSyncTable;
