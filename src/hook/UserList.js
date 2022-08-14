import { Button, Card, Table } from "antd";
import React from "react";

function UserList(props) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Tài khoản",
      dataIndex: "username",
      render: (_, user) => {
        return <h3>{user.username}</h3>;
      },
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số ĐT",
      dataIndex: "phone",
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "role",
    },
    {
      title: "",
      key: "action",
      render: (_, user) => {
        return (
          <>
            <Button onClick={() => props.getUpdateUser(user)} type="primary">Chỉnh sửa</Button>
            <Button onClick={() => props.deleteUser(user.id)}>Xoá</Button>
          </>
        );
      },
    },
  ];

  return (
    <Card
      title="Danh sách người dùng"
      headStyle={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <Table
        dataSource={props.users.map((user) => {
          return { ...user, key: user.id };
        })}
        columns={columns}
      ></Table>
    </Card>
  );
}

export default UserList;
