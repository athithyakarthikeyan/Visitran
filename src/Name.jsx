import React, { useState } from 'react';
import { Layout, Button, Input, Typography } from 'antd';
import "./index.css";

const { Content } = Layout;
const { TextArea } = Input;

const Name = ({ handleNextClick }) => {
  const [completedSections, setCompletedSections] = useState([false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionName, setConnectionName] = useState('');

  const handleNext = () => {
    const updatedSections = [...completedSections];
    updatedSections[currentSection] = true;
    setCompletedSections(updatedSections);
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
      setSelectedCard(null);
    }
    handleNextClick();
  };

  return (
    <Layout style={{ fontFamily: 'SF Pro', fontWeight: "lighter", letterSpacing: "1px" }}>
      <Content className="content1" style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
        <h1>Name your project</h1>
        <Input style={{ backgroundColor: '#1D1D1D' }} className="input" placeholder="Input" />
        <h1 style={{ marginTop: "20px" }}>Add description</h1>
        <TextArea style={{ backgroundColor: '#1D1D1D', marginBottom: "20px" }} className="input" placeholder="Input" />
        <br />
        <Button className="cancel-button">Cancel</Button>
        <Button className="next-button" onClick={handleNext}>Next</Button>
      </Content>
    </Layout>
  );
};

export default Name;

