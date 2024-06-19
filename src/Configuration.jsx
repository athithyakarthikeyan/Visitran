import React from 'react';
import { Layout, Typography, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Configuration = ({ selectedCard, connectionName, connectionLogo, handleNextClick }) => {
  return (
    <Layout className="layout-style">
      <Content style={{ color: "#ffffff", fontWeight: 'normal' }}>
        <Title className="title-style">Configure your environment</Title>
        <Paragraph className="para-style">
        This connection you configure here is also known as your project’s development environment, and will enable you to develop<br></br>
        using the IDE! If you’d like extra guidance while completing this step, check out this connection setup guide.
        </Paragraph>
        <Title className="title-style">Connection</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="config-input"
          value={connectionName}
          placeholder="Input"
          readOnly
          prefix={<img src={connectionLogo} alt="Connection Logo" className="connection-logo"/>}
        />
        <Title className="title-style">Connection name</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="config-input"
          value={connectionName}
          placeholder="Input"
          readOnly
          prefix={<img src={connectionLogo} alt="Connection Logo" className="connection-logo" />}
        />
        <Title className="title-style" style={{ marginTop: "40px", paddingBottom: "15px"}}>
          Settings <QuestionCircleOutlined className="question-logo"/>
        </Title>
        <Title className="title-style">Hostname</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title className="title-style" style={{ marginTop: "40px", marginBottom: "15px"}}>
          Developer Credentials <QuestionCircleOutlined className="question-logo"/>
        </Title>
        <Title className="title-style" >Username</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title className="title-style">Password</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
        <Title className="title-style">Schema</Title>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="config-input" placeholder="Input" />
      </Content>
    </Layout>
  );
}

export default Configuration;
