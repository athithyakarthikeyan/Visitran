import React from 'react';
import { Layout, Typography, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Configuration = ({ selectedCard, connectionName, connectionLogo, handleNextClick }) => {
  return (
    <Layout style={{ background: "#000000", fontFamily: 'SF Pro', fontWeight: "normal", letterSpacing: "1px" }}>
      <Content style={{ color: "#ffffff", fontWeight: 'normal' }}>
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Configure your environment</Title>
        <Paragraph style={{ paddingBottom: "20px", fontSize: "12px", color: "#ffffff" }}>
        This connection you configure here is also known as your project’s development environment, and will enable you to develop<br></br>
        using the IDE! If you’d like extra guidance while completing this step, check out this connection setup guide.
        </Paragraph>
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Connection</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="config-input"
          value={connectionName}
          placeholder="Input"
          readOnly
          prefix={<img src={connectionLogo} alt="Connection Logo" style={{ width: 16, height: 16, marginRight: 8 }} />}
        />
        <Title style={{ fontSize: "12px", color: "#ffffff" }}>Connection name</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="config-input"
          value={connectionName}
          placeholder="Input"
          readOnly
          prefix={<img src={connectionLogo} alt="Connection Logo" style={{ width: 16, height: 16, marginRight: 8 }} />}
        />
        <Title style={{ marginTop: "40px", paddingBottom: "15px", fontSize: "12px", color: "#ffffff" }}>
          Settings <QuestionCircleOutlined style={{ color: "grey", marginLeft: '1px', width: "14px" }} />
        </Title>
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Hostname</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Port</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Database</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title style={{ marginTop: "40px", paddingBottom: "15px", fontSize: "12px", color: "#ffffff" }}>
          Developer Credentials <QuestionCircleOutlined style={{ color: "grey", marginLeft: '1px', width: "14px" }} />
        </Title>
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Username</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title style={{ paddingBottom: "5px", fontSize: "12px", color: "#ffffff" }}>Password</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
      </Content>
    </Layout>
  );
}

export default Configuration;
