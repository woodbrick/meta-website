import './index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import * as React from 'react';
import EditTable from './edit-table';
import MenuArr, { MenuInfo } from './menus';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const getMenuList = (arr: Array<MenuInfo>) => {
  return arr.map((item, index) => (
    <Menu.Item key={index}>
      <Link to={item.route} className="menu-link">
        <Route 
          path={item.route} 
          exact={true} 
          children={({ match }) => (
            <div className={match ? 'active' : ''}>
              {item.title}
            </div>
          )}
        />
      </Link>
    </Menu.Item>
  ));
};
// function SubMenuList1() {
//   return (
//     <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
//       {getMenuList(MenuArr)}
//     </SubMenu>
//   );
// }

function SwitchContent() {
  let routes = MenuArr.map((menuInfo: MenuInfo, index) => (
    menuInfo.model !== undefined
      ? <Route key={index} path={menuInfo.route} component={() => <EditTable model={menuInfo.model} />}/>
      : <Route key={index} component={NoMatch}/>
  ));
  return (
    <Switch>
      {routes}
    </Switch>
  );
}
class Backstage extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{display: 'flex'}}>
          <div className="logo" ><img src="/favicon.ico" /></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                {getMenuList(MenuArr)}
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <SwitchContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
const NoMatch = ({ location }: {location: any}) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);
export default Backstage;
