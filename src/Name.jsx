import React, { useState } from 'react';
import { Layout, Button, Input, Typography } from 'antd';
import "./index.css";
const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const Name = ({ projectName, setProjectName, projectDescription, setProjectDescription, handleNextClick }) => {
  const [completedSections, setCompletedSections] = useState([false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionName, setConnectionName] = useState('');
  const isNextButtonDisabled = projectName.trim() === '';

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
    <Layout className="layout-style">
      <Content className="content1" style={{paddingLeft:"10px"}}>
      <Title className="title-style"style={{paddingTop:"40px"}}>Name your project</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="input"
          placeholder="Input"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Title className="title-style" style={{paddingTop:"15px"}} >Add description</Title>
        <TextArea
          style={{ backgroundColor: '#1D1D1D', marginBottom: "20px" }}
          className="input"
          placeholder="Input"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <br />
        <Button className="cancel-button">Cancel</Button>
        <Button
          className={isNextButtonDisabled ? "next-button-disabled" : "next-button"}
          onClick={handleNextClick}
          disabled={isNextButtonDisabled}
        >
          Next
        </Button>
      </Content>
    </Layout>
  );
};

export default Name;

