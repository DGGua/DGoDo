import { Layout, Menu } from "antd"
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { ItemPage } from "../ItemPage/ItemPage"
import './Home.scss'
export function Home() {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed((collapsed) => {
            return !collapsed
        })
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<>黄欣下辈子请客</>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<>nihao</>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<>nihao</>}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider >
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout >
    );
}