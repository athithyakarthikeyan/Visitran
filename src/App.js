// App.jsx
import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Avatar } from 'antd';
import { QuestionCircleOutlined, BgColorsOutlined, BellOutlined, CheckOutlined, UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Name from './Name';
import ChooseConnection from './Chooseconnection';
import Configuration from './Configuration';
import Logo from "./assets/89070934.png";
import "./index.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
  const [completedSections, setCompletedSections] = useState([false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionName, setConnectionName] = useState('');
  const [connectionLogo, setConnectionLogo] = useState('');
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
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
          <Name
            projectName={projectName}
            setProjectName={setProjectName}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            handleNextClick={handleNextClick}
          />
        );
      case 1:
        return (
          <ChooseConnection
            handleCardClick={handleCardClick}
            handleNextClick={handleNextClick}
            clickedCardIndex={clickedCardIndex}
          />
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
