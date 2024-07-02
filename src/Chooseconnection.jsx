import React, { useState, useEffect } from 'react';
import { Layout, Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import axios from 'axios';
import Snowflake from "./assets/snowflake-removebg-preview.png";
import Postgresql from "./assets/Postgresql_elephant.svg.png";
import Bigquery from "./assets/google-bigquery-logo-1.svg";
import Redshift from "./assets/aws-redshift2026-removebg-preview.png";
import "./index.css";

const { Content } = Layout;

const ChooseConnection = ({ handleCardClick, handleNextClick, clickedCardIndex, isNextButtonDisabled }) => {
  const [datasources, setDatasources] = useState([
    { name: 'Snowflake', image: Snowflake },
    { name: 'PostGreSQL', image: Postgresql },
    { name: 'BigQuery', image: Bigquery },
    { name: 'Redshift', image: Redshift },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/datasources');
        if (response.data.length > 0) {
          setDatasources(response.data);
        }
      } catch (error) {
        console.error('Error fetching datasources:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout className="layout-style">
      <Content className="content-style">
        <div style={{ display: "flex", gap: "10px" }}>
          {datasources.map((datasource, index) => (
            <Card
              key={index}
              bodyStyle={{ padding: 0 }}
              onClick={() => handleCardClick(index, datasource.name, datasource.image)}
              className={`card ${clickedCardIndex === index ? 'selected' : ''}`}
              hoverable
              cover={<img alt={datasource.name} src={datasource.image} className="image-style" style={{ width: "35px" }} />}
            >
              <Meta title={<span className="card-title">{datasource.name}</span>} className="card-body" />
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", width: "42%", marginTop: "30px" }}>
          <Button className="cancel-button">Skip</Button>
          <Button
            className={isNextButtonDisabled ? "next-button-disabled" : "next-button"}
            onClick={handleNextClick}
            disabled={isNextButtonDisabled}
          >
            Next
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default ChooseConnection;
