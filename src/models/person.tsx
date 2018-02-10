import { BackstageModel, BackstageField } from '.';
import FormInputType from '../components/form-fields';

enum Gender {
  Male,
  Female,
  Unkown
}
class Person {
  name: string;
  gender: Gender;
  email: string;
}

const RenderFields: BackstageField[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name: any) => `${name.first} ${name.last}`,
    editType: FormInputType.FormInputName,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  }
];
const PersonBackstage: BackstageModel = {
  name: 'Person',
  fields: RenderFields,
  url: 'https://randomuser.me/api'
};
export {Person, PersonBackstage};