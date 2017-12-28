import React,{Component} from 'react';
import { Row, Col, Menu,} from 'antd'
import { tabSchema } from '../../utils/schema'
import TopicList from '../topic-list/top-list.js'

class TopicIndex extends Component{

    render(){
        const menuItems = Object.keys(tabSchema).map((itemKey) => (
            <Menu.Item key={itemKey}>{tabSchema[itemKey]}</Menu.Item>
          ))
        return(
            <div style={{padding:'40px 0',flex:1}}>
                    <Row style={{minHeight:'100%'}}>
                        <Col xxl={4} xl={5} lg={5} md={6} xs={0} sm={0}>
                            <Menu
                                mode="inline"
                                style={{ lineHeight:'64px',border:'none', textAlign:'center'}}
                            >
                            {menuItems}
                            </Menu>
                        </Col> 
                        <Col xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
                            
                                <Menu
                                mode="horizontal"
                                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                            >
                            {menuItems}
                            </Menu>
                            
                        </Col>    
                        <TopicList></TopicList>
                    </Row>
                </div>
        )
    }
}
export default TopicIndex