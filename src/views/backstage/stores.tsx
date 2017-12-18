import { observable, action, computed } from 'mobx';
const getInt = (num: string|number|undefined, defaultValue= 0) => {
  num = parseInt(num + '', 10);
  return num === +num ? num : defaultValue;
};
class TablePageStore {
  @observable currentPage = 1;
  @observable pageSize = 5;
  @observable _rows: {}[] = [];
  @observable _cols: {}[] = [];
  @observable total = 10;
  @computed get rows() {
    return [...this._rows];
  }
  @computed get cols() {
    return [...this._cols];
  }
  set cols(cols: {}[]) {
    this._cols = cols;
  }
  set rows(rows: {}[]) {
    this._rows = rows;
  }
  loadRows(current?: number, pageSize?: number) {
    return new Promise((resolve, reject) => {
      reject('load rows not defined');
    });
  }
  updateData(res: any) {
    let rows = res.rows;
    if (!rows && !Array.isArray(rows)) { return; }
    let start = (this.currentPage - 1) * this.pageSize;
    this._rows = rows.slice(start, start + this.pageSize);
    this.total = getInt(res.total);
  }
  @action.bound
  changePage(current: number, pageSize?: number) {
    this.currentPage = getInt(current);
    this.pageSize = getInt(pageSize, 5);
    this.loadRows(this.currentPage, this.pageSize)
    .then(res => {
      this.updateData(res);
    });
  }
  @action.bound
  changePageSize(current: number, pageSize: number) {
    throw `changePageSize not defined! ${current}, ${pageSize}`;
  }
}

const pageStore = new TablePageStore();
export {pageStore};
