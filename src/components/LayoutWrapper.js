import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
/* import { withRouter } from "react-router"; */
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


class LayoutWrapper extends Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      const { children } = this.props;
      return (
        <Layout>
            <Header className="header" style={{ padding: '40px 10px', display: 'flex', alignItems: 'center', color: '#fff'}}>
                <Link to= "/">
                    <div className="logo" style={{ display: 'flex', paddingLeft: '6px'}}>
                        <span>
                            <img alt="logo" src="/kisspng-rubber-duck-clip-art-duck-5ab3e4a1cf3c94.0211275715217389138489.png" style={{ width: '50px'}}/>           
                        </span>
                        <span style={{ marginLeft: '10px', fontSize: '30px', fontWeight: '500'}}>Duckling</span>              
                    </div>
                </Link> 
        
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >                   
                </Menu>
            </Header>
            <Content >
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="user" />
                            subnav 1
                            </span>
                        }
                        >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="laptop" />
                            subnav 2
                            </span>
                        }
                        >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub3"
                        title={
                            <span>
                            <Icon type="notification" />
                            subnav 3
                            </span>
                        }
                        >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{ children }</Content>
                </Layout>
            </Content>
        </Layout>
      );
    }
  }

export default LayoutWrapper;