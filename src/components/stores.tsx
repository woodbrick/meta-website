import { observable, action } from 'mobx';
// const getInt = (num: string|number|undefined, defaultValue= 0) => {
//   num = parseInt(num + '', 10);
//   return num === +num ? num : defaultValue;
// };
class TablePageStore {
  @observable modalShow = false;
  @observable rowData = {};
  @observable model = {};
  @action.bound
  showModal(rowData: any) {
    this.rowData = rowData;
    this.modalShow = true;
  }
  @action
  closeModal() {
    this.modalShow = false;
    this.rowData = {};
  }
}
const pageStore = new TablePageStore();
export {pageStore, TablePageStore};
