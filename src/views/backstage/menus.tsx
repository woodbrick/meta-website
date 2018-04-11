import { BackstageModel } from '../../models';
import { PersonBackstage } from '../../models/person';

interface MenuInfo {
  title: string;
  icon: string;
  route: string;
  model: BackstageModel;
  [propName: string]: any;
}
let MenuArr: MenuInfo[] = [{
  title: 'issues',
  icon: 'list',
  route: '/backstage/person',
  model: PersonBackstage
}, {
  title: 'folders',
  icon: 'folder',
  route: '/backstage/folder',
  model: PersonBackstage
}];

export {MenuInfo};
export default MenuArr;