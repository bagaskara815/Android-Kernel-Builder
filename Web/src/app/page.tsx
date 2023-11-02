'use client';

import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image'

const { Header, Content, Footer, Sider } = Layout;
import { useRouter } from 'next/navigation'

const items1: MenuProps['items'] = ['/about', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const App: React.FC = () => {

  const router = useRouter()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleClick = (e) => {
    router.push(e)
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="https://github.com/DogDayAndroid/Android-Kernel-Builder/raw/main/.assets/DogDayAndroid.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} onClick={ handleClick }/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        Need router.
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;