import React, { useState, useEffect } from "react";
import { Table, Button, Input, Tag, Dropdown, Menu, Modal, Form, Select, DatePicker, message } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import axios from "axios";
import "./Activities.css"; // Custom CSS for modal animations

const { Option } = Select;
const API_URL = "http://localhost:6060/getactivities";

const tagColors = {
  Meeting: "purple",
  Calls: "green",
  Email: "orange",
  Task: "blue",
};

const ActivityTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      message.error("Failed to fetch data");
      console.error("Error fetching data:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleAddActivity = () => {
    form.validateFields().then((values) => {
      const newActivity = {
        key: (data.length + 1).toString(),
        title: values.title,
        activityType: values.activityType,
        dueDate: values.dueDate.format("DD MMM YYYY, hh:mm a"),
        owner: values.owner,
        createdAt: dayjs().format("DD MMM YYYY, hh:mm a"),
      };

      setData([...data, newActivity]);
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Activity Type",
      dataIndex: "activityType",
      key: "activityType",
      render: (type) => <Tag color={tagColors[type] || "default"}>{type}</Tag>,
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Delete</Menu.Item>
            </Menu>
          }
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Input
        placeholder="Search Activities"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 10, width: 300 }}
      />
      <Button type="primary" icon={<PlusOutlined />} style={{ float: "right" }} onClick={showModal}>
        Add New Activity
      </Button>
      <Table
        columns={columns}
        dataSource={data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))}
      />

      <Modal
        title="Add New Activity"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleAddActivity}
        className="slide-in-modal"
        width={600}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
            <Input placeholder="Enter title" />
          </Form.Item>
          <Form.Item name="activityType" label="Activity Type" rules={[{ required: true, message: "Please select an activity type" }]}>
            <Select placeholder="Select activity type">
              <Option value="Meeting">Meeting</Option>
              <Option value="Calls">Calls</Option>
              <Option value="Email">Email</Option>
              <Option value="Task">Task</Option>
            </Select>
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date" rules={[{ required: true, message: "Please select a due date" }]}>
            <DatePicker showTime format="DD MMM YYYY, hh:mm a" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="owner" label="Owner" rules={[{ required: true, message: "Please enter owner name" }]}>
            <Input placeholder="Enter owner name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ActivityTable;
