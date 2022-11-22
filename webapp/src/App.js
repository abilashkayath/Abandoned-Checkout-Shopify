import { useState, useEffect } from "react";
import { Typography, Table } from "antd";
import axios from "axios";
import "antd/dist/reset.css";

import "./App.css";

const { Title } = Typography;

function App() {
  const [gridData, setGridData] = useState([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "age",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "address",
    },
  ];

  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    const response = await axios.get(`${process.env.URL}/api/message`);
    const { data } = response;

    let tableData = [];
    data.map(({ name, email, createdAt }, index) => {
      tableData.push({ key: index, name, email, time: createdAt });
    });
    setGridData(tableData);
  }

  return (
    <div className="App">
      <Title>Messages sent</Title>
      <Table dataSource={gridData} columns={columns} />;
    </div>
  );
}

export default App;
