import React, { useState } from 'react';
import { Layout, Menu, Button, Card, Typography, Avatar } from 'antd';
import { QuestionCircleOutlined, BgColorsOutlined, BellOutlined, CheckOutlined, UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Snowflake from "./assets/snowflake-removebg-preview.png";
import Postgresql from "./assets/Postgresql_elephant.svg.png";
import Bigquery from "./assets/google-bigquery-logo-1.svg";
import Redshift from "./assets/aws-redshift2026-removebg-preview.png";
import Name from './Name';
import Configuration from './Configuration';
import Logo from "./assets/89070934.png";
import "./index.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

function App() {
  const [completedSections, setCompletedSections] = useState([false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionName, setConnectionName] = useState('');
  const [connectionLogo, setConnectionLogo] = useState('');
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const iconStyle = {
    color: 'white',
    fontSize: '24px',
    marginRight: '20px',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#235583',
  };

  const handleCardClick = (cardIndex, cardName, cardLogo) => {
    setSelectedCard(cardIndex);
    setClickedCardIndex(cardIndex);
    setConnectionName(cardName);
    setConnectionLogo(cardLogo);
  };

  const handleNextClick = () => {
    const updatedSections = [...completedSections];
    updatedSections[currentSection] = true;
    setCompletedSections(updatedSections);
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 0:
        return (
          <Name handleNextClick={handleNextClick} />
        );
      case 1:
        return (
          <Layout style={{ fontFamily: 'SF Pro', fontWeight: "normal", letterSpacing: "1px" }}>
            <Content className="content2" style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Card bodyStyle={{ padding: 0 }} onClick={() => handleCardClick(0, 'Snowflake', Snowflake)} className="card" hoverable 
                  cover={<img alt="Snowflake" src={Snowflake} style={{ width: 40, margin: 'auto', padding: 0, marginBottom: "5px", marginTop: "15px" }} />}>
                  <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>Snowflake</span>} className="card-body" />
                </Card>
                <Card bodyStyle={{ padding: 0 }} onClick={() => handleCardClick(1, 'PostGreSQL', Postgresql)} className="card" hoverable 
                  cover={<img alt="PostGreSQL" src={Postgresql} style={{ width: 24, margin: 'auto', marginTop: "20px", marginBottom: "5px" }} />}>
                  <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>PostGreSQL</span>} className="card-body" />
                </Card>
                <Card bodyStyle={{ padding: 0 }} onClick={() => handleCardClick(2, 'BigQuery', Bigquery)} className="card" hoverable 
                  cover={<img alt="BigQuery" src={Bigquery} style={{ width: 24, margin: 'auto', marginTop: "20px", marginBottom: "5px" }} />}>
                  <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>BigQuery</span>} className="card-body" />
                </Card>
                <Card bodyStyle={{ padding: 0 }} onClick={() => handleCardClick(3, 'Redshift', Redshift)} className="card" hoverable 
                  cover={<img alt="Redshift" src={Redshift} style={{ width: 40, margin: 'auto', marginTop: "15px", marginBottom: "5px" }} />}>
                  <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>Redshift</span>} className="card-body" />
                </Card>
              </div>
              <Button onClick={handleNextClick} className="cancel-button" style={{ marginLeft: "520px", marginTop: "30px" }}>Skip</Button>
              <Button onClick={handleNextClick} className="next-button" >Next</Button>
            </Content>
          </Layout>
        );
      case 2:
        return (
          <Configuration
            selectedCard={selectedCard}
            connectionName={connectionName}
            connectionLogo={connectionLogo}
            handleNextClick={handleNextClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'SF Pro', fontWeight: "normal", letterSpacing: "1px" }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className='first-header'>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
            <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Title level={3} style={{ color: 'white', margin: 0, fontSize: "22px" }}>Visitran</Title>
          </div>
          <div className="icon-list">
            <BgColorsOutlined style={iconStyle} />
            <QuestionCircleOutlined style={iconStyle} />
            <BellOutlined style={iconStyle} />
            <Avatar size={40} icon={<UserOutlined />} />
          </div>
        </Header>
        <div className="second-header">
          <Button className="project-button"><PlusCircleOutlined />Project</Button>
        </div>
        <Layout>
          <Sider width={300} style={{ background: '#1D1D1D', margin: 0 ,fontFamily: 'SF Pro', fontWeight: "normal", letterSpacing: "1px"}}>
            <div style={{ padding: '16px', color: 'white' }}>Complete Your Setup</div>
            <Menu mode="inline" theme="dark" style={{ backgroundColor: '#1D1D1D' }} onClick={(e) => setCurrentSection(Number(e.key))}>
              {['Name your project', 'Choose your connection', 'Configure your environment', 'Setup a repository'].map((item, index) => (
                <Menu.Item
                key={index}
                className="main-menu"
                style={{
                  borderLeft: `4px solid ${currentSection === index ? '#1668DC' : '#1D1D1D'}`,
                  backgroundColor: currentSection === index ? '#1D1D1D' : 'transparent',
                }}
                onClick={(e) => setCurrentSection(Number(e.key))}
              >
                <div
                  className="blue-circle"
                  style={{
                    fontSize: 14,
                    color: '#ffffff',
                    backgroundColor: completedSections[index] ? '#111A2C' : currentSection === index ? '#1668DC' : '#303030',
                  }}
                >
                  {completedSections[index] ? <CheckOutlined className="checkmark" style={{ color: '#1668DC' }} /> : index + 1}
                </div>
                {item}
              </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
              {renderContent()}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
