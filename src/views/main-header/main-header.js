import React, { Component } from 'react';
import { Row, Col, Menu, Dropdown, Icon, Button, Avatar} from 'antd'

import style from './style'
import menuSchema from '../../utils/schema.js'

class MainHeader extends Component{
    render(){
        const loginMenu=(
            <Dropdown overlay={
                <Menu style={{width:140}}>
                    <Menu.Item style={style.root}>发布话题</Menu.Item>
                    <Menu.Item style={style.root}>用户中心</Menu.Item>
                    <Menu.Item style={style.root}>退出登录</Menu.Item>
                </Menu>
                } 
                placement="bottomCenter">
                <div style={style.flexCenter}>
                <Avatar size="small" icon="user"/>
                <p style={{margin:'0 10px'}}>小壮</p>
                </div>
            </Dropdown>
        )
        const screenMenu = (
            <Menu style={style.screenMenu}>
              {
                Object.keys(menuSchema).map((itemKey) => (
                  <Menu.Item key={itemKey}>
                    <Icon type={itemKey} /> {menuSchema[itemKey]}
                  </Menu.Item>
                ))
              }
              <Menu.Divider />
              <Menu.Item>
                {/* <Icon type="user" /> 登陆 */}
                {loginMenu}
              </Menu.Item>
              {/* <Menu.Item>
                <Icon type="flag" /> 注册
              </Menu.Item> */}
            </Menu>
          )
        return (
            <header style={{ }}>
                    <Row style={{ height: '100%' }}>
                        <Col xxl={4} xl={5} lg={5} md={6} xs={24} sm={24}>
                            <h1 style={style.title}>小壮</h1>
                        </Col>
                        <Col xxl={20} xl={19} lg={19} md={18} xs={0} sm={0} style={style.menuCol}>
                            <div style={style.ColStyle}></div>
                            <Menu mode="horizontal" selectable={false} style={style.Menu}>
                                <Menu.Item>
                                    <Icon type='home' />主页
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type='book' />教程
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type='info-circle-o' />关于
                                </Menu.Item>
                            </Menu>
                            <div style={style.colButton}>
                                {/*<div>
                                    <Button style={{marginRight:2}}>
                                    登录<Icon type='user'></Icon>
                                    </Button>
                                    <Button style={{marginRight:2}}>
                                    注册<Icon type='flag'></Icon>
                                    </Button>
                                </div>  */}
                                <Dropdown overlay={
                                            <Menu style={{width:140}}>
                                                <Menu.Item style={style.root}>发布话题</Menu.Item>
                                                <Menu.Item style={style.root}>用户中心</Menu.Item>
                                                <Menu.Item style={style.root}>退出登录</Menu.Item>
                                            </Menu>
                                            } 
                                            placement="bottomRight">
                                    <div style={style.flexCenter}>
                                    <Avatar size="small" icon="user"/>
                                    <p style={{margin:'0 10px'}}>小壮</p>
                                    </div>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{position:'absolute',right:30,top:16}}>
                            <Col xxl={0} xl={0} md={0} xs={24} sm={24}>
                            <Dropdown overlay={screenMenu} placement="bottomRight"> 
                                <Button>
                                    <Icon type="bars"></Icon>
                                </Button>
                            </Dropdown>
                            </Col>
                    </Row>
                </header>
        )
    }
}

export default MainHeader