import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { filterNotesByLabel, fetchData } from 'redux/actions';
import SelectWrapper from 'components/SelectWrapper';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutWrapper = (props) => {
    
    const [collapsed, setCollapsed] = useState(false);
    const { children } = props;
    const labels = ["#TODO", "#HACK", "#DEBUG"];
    const languages = ["Javascript", "Python", "Java"];

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed({ collapsed })
    };

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
            <div className="filtersContainer">   
                {/* <span>Filters</span> */}
                <SelectWrapper labels={labels} placeholder={'Label'} />
                <SelectWrapper labels={languages} placeholder={'Language'} />
        
            </div>
            <Content >
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }} collapsible collapsed={collapsed} onCollapse={onCollapse}>
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
                            <Icon type="info-circle" />
                            Category
                            </span>
                        }
                        >
                        <Menu.Item key="1">Documentation</Menu.Item>
                        <Menu.Item key="2">Cheat</Menu.Item>
                        <Menu.Item key="3">Info</Menu.Item>
                        <Menu.Item key="4">Reusable</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="code" />
                            Language
                            </span>
                        }
                        >
                        <Menu.Item key="5">Javascript</Menu.Item>
                        <Menu.Item key="6">Python</Menu.Item>
                        <Menu.Item key="7">Java</Menu.Item>
  
                        </SubMenu>

                       

                        <SubMenu
                        key="sub3"
                        title={
                            <span>
                            <Icon type="flag" />
                            Labels
                            </span>
                        }
                        >
                        
                        <Menu.Item key="9" >#TODO</Menu.Item>
                        <Menu.Item key="10" >#HACK</Menu.Item>
                        <Menu.Item key="11" >#DEBUG</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{ children }</Content>
                </Layout>
            </Content>
        </Layout>
    )
}

const mapStateToProps = ({ snippets: { data} }) => {
    return { data };
}
  
  const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData),
    filterNotesByLabel: (labels) => dispatch(filterNotesByLabel(labels))
  })
  
  
export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);