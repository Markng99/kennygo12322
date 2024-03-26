import { Layout, Space } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import { Card, Button, DatePicker, DatePickerProps, Row, Col, Image } from 'antd';
import Hello from './componets/hello';
import Goodbye from './componets/Goodbye';
import About from './componets/About';
import Dashboard from './componets/Dashboard';

const { Header, Content, Footer } = Layout;

const Home = () => {
  let counter = 0;
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onClick = (event: any) => {
    console.log(counter++);
  };

  return (
    <>
      <Hello name="Web API Development" />
      <Goodbye name="GoodBye" />
      <div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Card 1" style={{ width: '100%' }}>
              <Image src="https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/11/japanese-anime-studios-cover.png" />
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content 123</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card 2" style={{ width: '100%' }}>
              <Image src="https://api.esquirehk.com/var/site/storage/images/_aliases/img_1200_w/6/0/7/2/6152706-1-chi-HK/FoAphIqagAAHVWx.jpeg" />
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content 123</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card 3" style={{ width: '100%' }}>
              <Image src="https://today-obs.line-scdn.net/0h1U_q-rKCbnpiCEeqH8QRLVhebRVRZH15Bj4_eSFmME4Yay8qX2ZyT05bMEtIOikkDDwiHEMOdUsdbyskWGdy/w1200" />
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content 123</p>
            </Card>
          </Col>
          {/* Add more <Col> components with Card content for additional rows */}
        </Row>
        <br />
        <Button type="primary" onClick={onClick}>
          Button
        </Button>
        <Button type="primary" danger>
          Button
        </Button>
        <br />
        <DatePicker onChange={onChange} />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/">Articles</Link>
            <Link to="/">About</Link>
            {/* Add more routes if needed */}
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Content>
      <Footer>
        <p>VT6003CEM Demo</p>
      </Footer>
    </Router>
  );
};

export default App;