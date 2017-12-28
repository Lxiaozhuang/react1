import React,{Component} from 'react';
import {  Col, Avatar,List,Tag,Pagination  } from 'antd'

class TopicList extends Component{
    render(){
        const topics = [
            {
              reply_count: 30,
              visit_count: 400,
              author: {
                loginname: 'Fq',
                avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
              },
              create_at: '2017-12-11',
              title: '首届蚂蚁金服体验科技大会'
            },
            {
              reply_count: 30,
              visit_count: 400,
              author: {
                loginname: 'Fq',
                avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
              },
              create_at: '2017-12-11',
              title: '首届蚂蚁金服体验科技大会'
            },
            {
              reply_count: 30,
              visit_count: 400,
              author: {
                loginname: 'Fq',
                avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
              },
              create_at: '2017-12-11',
              title: '首届蚂蚁金服体验科技大会'
            }
          ]
        return(
            <Col xxl={20} xl={19} lg={19} md={18} xs={24} sm={24}>
                        <List
                            itemLayout="horizontal"
                            loading={false}

                            dataSource={topics}
                            renderItem={item => (
                            <List.Item 
                                actions={
                                [
                                    <span style={{marginLeft: 35}}>回复:{item.reply_count}</span>, 
                                    <span>访问:{item.visit_count}</span>
                                ]
                                }
                            >
                                <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} />}
                                title={
                                <div>
                                    <Tag 
                                    color={'magenta'}
                                    >
                                    {'分享'}
                                    </Tag>
                                    <a href="https://ant.design">{item.title}</a>
                                    </div>
                                    }
                                    description={<span>{item.author.loginname} 发表于: {item.create_at}</span>}
                                    />
                                <div />
                                </List.Item>
                                )}
                            />
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={()=>{}} size="small"/>  
                        </Col>  

        )
    }
}

export default TopicList