import React, { useState } from 'react';
import { Layout, Button, Input, Typography, message } from 'antd';
import "./index.css";
import axios from 'axios';

const { Title } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const Name = ({ projectName, setProjectName, projectDescription, setProjectDescription, handleNextClick }) => {
  const [isValidProjectName, setIsValidProjectName] = useState(true);
  const isNextButtonDisabled = projectName.trim() === '' || !isValidProjectName;

  const handleNext = () => {
    if (!isValidProjectName) {
      message.error('Please enter a valid project name.');
      return;
    }
    handleNextClick();
  };

  const checkProjectNameValidity = async (name) => {
    try {
      const response = await axios.get(`/api/v1/project/exists?project_name=${encodeURIComponent(name)}`);
      setIsValidProjectName(!response.data.exists);
    } catch (error) {
      console.error('Error checking project name validity:', error);
      setIsValidProjectName(true);
    }
  };

  const handleProjectNameChange = (e) => {
    const newName = e.target.value;
    setProjectName(newName);
    if (newName.trim() === '') {
      setIsValidProjectName(true); 
      return;
    }
    checkProjectNameValidity(newName);
  };

  return (
    <Layout className="layout-style">
      <Content className="content1">
        <Title className="title-style" style={{ paddingTop: "40px", marginBottom: "15px" }}>Name your project</Title>
        <Input
          className="input"
          style={{ backgroundColor: '#1D1D1D' }}
          placeholder="Enter project name"
          value={projectName}
          onChange={handleProjectNameChange}
        />
        {!isValidProjectName && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
            This project name already exists. Please choose a different name.
          </div>
        )}
        <Title className="title-style" style={{ marginBottom: "10px" }}>Add description</Title>
        <TextArea
          className="input"
          style={{ backgroundColor: '#1D1D1D', marginBottom: "20px" }}
          placeholder="Enter project description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", width: "26%", marginTop: "10px" }}>
          <Button className="cancel-button" style={{ marginRight: "10px" }}>Cancel</Button>
          <Button
            className={isNextButtonDisabled ? "next-button-disabled" : "next-button"}
            onClick={handleNext}
            disabled={isNextButtonDisabled}
          >
            Next
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Name;
