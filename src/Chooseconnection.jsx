import React from 'react';
import { Layout, Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Snowflake from "./assets/snowflake-removebg-preview.png";
import Postgresql from "./assets/Postgresql_elephant.svg.png";
import Bigquery from "./assets/google-bigquery-logo-1.svg";
import Redshift from "./assets/aws-redshift2026-removebg-preview.png";
import "./index.css";

const { Content } = Layout;

const ChooseConnection = ({ handleCardClick, handleNextClick, clickedCardIndex }) => {
  return (
    <Layout className="layout-style">
      <Content className="content-style" >
        <div style={{ display: "flex", gap: "10px" }}>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(0, 'Snowflake', Snowflake)}
            className={`card ${clickedCardIndex === 0 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="Snowflake" src={Snowflake} className="image-style" style={{width:"35px"}}/>}
          >
            <Meta title={<span className="card-title" style={{paddingBottom:"30px"}}>Snowflake</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(1, 'PostGreSQL', Postgresql)}
            className={`card ${clickedCardIndex === 1 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="PostGreSQL" src={Postgresql} className="image-style" style={{width:"24px", paddingBottom:"1px"}}/>}
          >
            <Meta title={<span className="card-title">PostgreSQL</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(2, 'BigQuery', Bigquery)}
            className={`card ${clickedCardIndex === 2 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="BigQuery" src={Bigquery} className="image-style" style={{width:"24px", paddingBottom:"1px"}}/>}
          >
            <Meta title={<span className="card-title" style={{paddingBottom:"20px"}}>BigQuery</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(3, 'Redshift', Redshift)}
            className={`card ${clickedCardIndex === 3 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="Redshift" src={Redshift} className="image-style" style={{width:"30px", paddingBottom:"1px"}} />}
          >
            <Meta title={<span className="card-title">Redshift</span>} className="card-body"  />
          </Card>
        </div>
        <Button onClick={handleNextClick} className="cancel-button" style={{ marginLeft: "520px", marginTop: "30px" }}>Skip</Button>
        <Button onClick={handleNextClick} className="next-button">Next</Button>
      </Content>
    </Layout>
  );
};

export default ChooseConnection;
