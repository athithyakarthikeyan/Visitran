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
    <Layout style={{ fontFamily: 'SF Pro', fontWeight: "normal", letterSpacing: "1px" }}>
      <Content className="content2" style={{ margin: 0, padding: 24, background: '#000000', minHeight: 280 }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(0, 'Snowflake', Snowflake)}
            className={`card ${clickedCardIndex === 0 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="Snowflake" src={Snowflake} style={{ width: 40, margin: 'auto', padding: 0, marginBottom: "5px", marginTop: "15px" }} />}
          >
            <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>Snowflake</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(1, 'PostGreSQL', Postgresql)}
            className={`card ${clickedCardIndex === 1 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="PostGreSQL" src={Postgresql} style={{ width: 24, margin: 'auto', marginTop: "20px", marginBottom: "5px" }} />}
          >
            <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>PostGreSQL</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(2, 'BigQuery', Bigquery)}
            className={`card ${clickedCardIndex === 2 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="BigQuery" src={Bigquery} style={{ width: 24, margin: 'auto', marginTop: "20px", marginBottom: "5px" }} />}
          >
            <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>BigQuery</span>} className="card-body" />
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            onClick={() => handleCardClick(3, 'Redshift', Redshift)}
            className={`card ${clickedCardIndex === 3 ? 'selected' : ''}`}
            hoverable
            cover={<img alt="Redshift" src={Redshift} style={{ width: 40, margin: 'auto', marginTop: "15px", marginBottom: "5px" }} />}
          >
            <Meta title={<span style={{ color: 'white', fontWeight: "normal" }}>Redshift</span>} className="card-body" />
          </Card>
        </div>
        <Button onClick={handleNextClick} className="cancel-button" style={{ marginLeft: "520px", marginTop: "30px" }}>Skip</Button>
        <Button onClick={handleNextClick} className="next-button">Next</Button>
      </Content>
    </Layout>
  );
};

export default ChooseConnection;
