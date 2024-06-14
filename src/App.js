import React, { useState } from 'react';
import { Layout, Menu, Button, Input, Card, Typography } from 'antd';
import { QuestionCircleOutlined, BgColorsOutlined, BellOutlined, CheckOutlined } from '@ant-design/icons';
import Snowflake from "./assets/snowflake-removebg-preview.png";
import Postgresql from "./assets/Postgresql_elephant.svg.png";
import Bigquery from "./assets/google-bigquery-logo-1.svg";
import Redshift from "./assets/aws-redshift2026-removebg-preview.png";
import Logo from "./assets/89070934.png";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

function App() {
  const [completedSections, setCompletedSections] = useState([false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionName, setConnectionName] = useState('');

  const handleCardClick = (cardIndex, cardName) => {
    setSelectedCard(cardIndex);
    setConnectionName(cardName);
  };
  
  const handleNextClick = () => {
    const updatedSections = [...completedSections];
    updatedSections[currentSection] = true;
    setCompletedSections(updatedSections);
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
      setSelectedCard(null);
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 0:
        return (
          <Layout>
            <Content className="content1" style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
              <h1 style={{ color: "#ffffff", fontSize: "14px" }}>Name your project</h1>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', color: '#ffffff' }} placeholder="Input" />
              <h1 style={{ color: "#ffffff", fontSize: "14px" }}>Add description</h1>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', color: '#ffffff' }} placeholder="Input" />
              <br />
              <Button style={{ backgroundColor: "#1D1D1D", border: 0, marginTop: "40px", marginLeft: "160px", height: "32px", color: "#ffffff" }}>Cancel</Button>
              <Button onClick={handleNextClick} style={{ backgroundColor: "#1668DC", border: 0, marginTop: "40px", marginLeft: "10px", height: "32px", color: "#ffffff" }}>Next</Button>
            </Content>
          </Layout>
        );
      case 1:
        return (
          <Layout>
            <Content className="content2" style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
              <div style={{ display: "flex" }}>
              <Card onClick={() => handleCardClick(0, 'Snowflake')} hoverable bodyStyle={{ padding: 0 }} style={{color: "#ffffff", borderColor: selectedCard === 0 ? "#ffffff" : "#424242", width: 136, height: 83, margin: '0 10px', textAlign: 'center', backgroundColor: "#1D1D1D" }} cover={<img alt="Snowflake" src={Snowflake} style={{ width: 60, margin: 'auto', marginTop: "5px", paddingBottom: 0 }} />}>
                <Meta title="Snowflake" style={{ color: "#ffffff", height: "24px", padding: 0 }} />
              </Card>
              <Card onClick={() => handleCardClick(1, 'PostGreSQL')} hoverable bodyStyle={{ padding: 0 }} style={{ borderColor: selectedCard === 1 ? "#ffffff" : "#424242", width: 136, height: 83, margin: '0 10px', textAlign: 'center', backgroundColor: "#1D1D1D" }} cover={<img alt="Snowflake" src={Postgresql} style={{ width: 30, margin: 'auto', marginTop: "15px" }} />}>
                <Meta title="PostGreSQL" style={{ color: "#ffffff", height: "24px", margin: 'auto' }} />
              </Card>
              <Card onClick={() => handleCardClick(2, 'BigQuery')} hoverable bodyStyle={{ padding: 0 }} style={{ borderColor: selectedCard === 2 ? "#ffffff" : "#424242", width: 136, height: 83, margin: '0 10px', textAlign: 'center', backgroundColor: "#1D1D1D" }} cover={<img alt="Snowflake" src={Bigquery} style={{ width: 30, margin: 'auto', marginTop: "15px" }} />}>
                <Meta title="BigQuery" style={{ color: "#ffffff", height: "24px", margin: 'auto' }} />
              </Card>
              <Card onClick={() => handleCardClick(3, 'Redshift')} hoverable bodyStyle={{ padding: 0 }} style={{ borderColor: selectedCard === 3 ? "#ffffff" : "#424242", width: 136, height: 83, margin: '0 10px', textAlign: 'center', backgroundColor: "#1D1D1D" }} cover={<img alt="Snowflake" src={Redshift} style={{ width: 40, margin: 'auto', marginTop: "15px" }} />}>
                <Meta title="Redshift" style={{ color: "#ffffff", height: "24px", margin: 'auto' }} />
              </Card>

              </div>
              <Button style={{ backgroundColor: "#1D1D1D", border: 0, marginTop: "40px", marginLeft: "485px", height: "32px", color: "#ffffff" }}>Skip</Button>
              <Button onClick={handleNextClick} style={{ backgroundColor: "#1668DC", border: 0, marginTop: "40px", marginLeft: "10px", height: "32px", color: "#ffffff" }}>Next</Button>
            </Content>
          </Layout>
        );

      case 2:
        return(
          <Layout style={{background:"#000000"}}>
            <Content style={{color:"#ffffff",fontWeight: 'normal'}}>
              <h4 style={{fontSize:"22px", margin:"auto", marginTop:"15px"}}>Configure your environment</h4>
              <p style={{paddingBottom:"20px"}}>This connection you configure here is also known as your project’s development environment, and will enable you to develop using the IDE! If you’d like extra guidance while completing this step, check out this connection setup guide.
              (optional)</p>
              <h4>Connection</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} value={connectionName} placeholder="Input" />
              <h4>Connection name</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} value={connectionName} placeholder="Input" />
              <h4>Settings</h4>
              <h4>Hostname</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} placeholder="Input" />
              <h4>Port</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} placeholder="Input" />
              <h4>Database</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} placeholder="Input" />
              <h4>Username</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} placeholder="Input" />
              <h4>Password</h4>
              <Input style={{ width: "300px", backgroundColor: '#1D1D1D', margin:"auto",border: 'none', color: '#ffffff' }} placeholder="Input" />
            </Content>
          </Layout>
        )
      default:
        return null;
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'SF Pro Text' }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#092C4C', padding: 0, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: "64px" }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
            <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Title level={3} style={{ color: 'white', margin: 0, fontSize: "22px" }}>Visitran</Title>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
            <BgColorsOutlined style={{ color: 'white', fontSize: '24px', marginRight: '20px' }} />
            <QuestionCircleOutlined style={{ color: 'white', fontSize: '24px', marginRight: '20px' }} />
            <BellOutlined style={{ color: 'white', fontSize: '24px', marginRight: '20px' }} />
          </div>
        </Header>
        <div style={{ background: "#0C3861", height: "40px", width: "100%", display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ color: 'white', marginRight: '10px', height: "40px", backgroundColor: "#1668DC", border: 'none', borderRadius: '0px' }}>Project</Button>
        </div>
        <Layout>
          <Sider width={300} style={{ background: '#1D1D1D', margin: 0 }}>
            <div style={{ padding: '16px', color: 'white' }}>Complete Your Setup</div>
            <Menu mode="inline" theme="dark" style={{ backgroundColor: '#1D1D1D' }} onClick={(e) => setCurrentSection(Number(e.key))}>
              {['Name your project', 'Choose your connection', 'Configure your environment', 'Setup a repository'].map((item, index) => (
                <Menu.Item key={index}>
                  {completedSections[index] ? <CheckOutlined style={{ color: 'green', marginRight: '8px' }} /> : <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid white', display: 'inline-block', marginRight: '8px' }} />}
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
