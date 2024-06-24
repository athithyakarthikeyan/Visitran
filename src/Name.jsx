import React, { useState } from 'react';
import { Layout, Button, Input, Typography } from 'antd';
import "./index.css";

const { Title } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const Name = ({ projectName, setProjectName, projectDescription, setProjectDescription, handleNextClick }) => {
  const isNextButtonDisabled = projectName.trim() === '';

  const handleNext = () => {
    handleNextClick();
  };

  return (
    <Layout className="layout-style">
      <Content className="content1">
        <Title className="title-style" style={{ paddingTop: "40px" }}>Name your project</Title>
        <Input
          style={{ backgroundColor: '#1D1D1D' }}
          className="input"
          placeholder="Input"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Title className="title-style" style={{ paddingTop: "15px" }}>Add description</Title>
        <TextArea
          style={{ backgroundColor: '#1D1D1D', marginBottom: "20px" }}
          className="input"
          placeholder="Input"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", width: "25.5%", marginTop: "30px" }}>
          <Button className="cancel-button">Cancel</Button>
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
