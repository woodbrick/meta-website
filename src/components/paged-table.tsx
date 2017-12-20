
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table } from 'antd';
let reqwest = require('reqwest');

interface Pagination {
  current: number;
  total: number;
  pageSize: number;
}
interface PagedSyncTableState {
  pagination: Pagination;
  data: {}[];
  loading: boolean;
}
interface PagedSyncTableProps {
  columns: {}[];
  url: string;
}
@inject('pageStore')
@observer
class PagedSyncTable extends React.Component<PagedSyncTableProps, PagedSyncTableState> {
  state = {
    data: [],
    loading: false,
    pagination: {
      current: 1,
      total: 1,
      pageSize: 10
    }
  };
  constructor(props: any) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data: any) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }
  handleChange(pagination: any, filters: any, sorter: any) {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    let { columns } = this.props;
    return (
      <div>
        <Table 
          columns={columns} 
          dataSource={this.state.data} 
          pagination={this.state.pagination}
          rowKey="registered"
          onChange={this.handleChange} 
        />
      </div>
    );
  } // render
}

export default PagedSyncTable;
