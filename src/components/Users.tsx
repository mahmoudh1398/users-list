import { Table } from "antd";
import type { TableProps } from "antd";
import "assets/styles/components/Users.css";
import Search from "./Search";
import Loading from "./Loading";
import { UserInTableEntityModel } from "model/entity/user.model";
import { useGetUsers } from "utils/hooks/users";
import { convertToTableData } from "utils/pure-function/convertToTableData";
import UserAction from "./UserAction";
import SearchSelect from "./SearchSelect";
import { useEffect, useState } from "react";
import { filterDataByName } from "utils/pure-function/filterDataByName";
import { filterDataByAnyProperty } from "utils/pure-function/filterDataByAnyProperty";

const columns: TableProps<UserInTableEntityModel>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: ({ street, suite, city, zipcode, geo: { lat, lng } }) => {
      return (
        <p>
          {street}, {suite}, {city}, {zipcode}, {lat} | {lng}
        </p>
      );
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    render: ({ name, catchPhrase, bs }) => {
      return (
        <p>
          {name}, {catchPhrase}, {bs}
        </p>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return <UserAction record={record} />;
    },
  },
];

const Users = () => {
  const { data, isSuccess, isLoading, isError } = useGetUsers();

  const [tableData, setTableData] = useState<UserInTableEntityModel[]>([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isSuccess && data) {
      setTableData(convertToTableData(data));
    }
    if (isError) {
      setTableData([]);
    }
  }, [data, isSuccess, isError]);

  useEffect(() => {
    if (selectedUser && data) {
      const filteredData = filterDataByName(data, selectedUser);
      const convertedData = convertToTableData(filteredData);
      setTableData(convertedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  useEffect(() => {
    if (searchTerm && data) {
      const filteredData = filterDataByAnyProperty(data, searchTerm);
      const convertedData = convertToTableData(filteredData);
      setTableData(convertedData);
    }
    if (!searchTerm && data) {
      setTableData(convertToTableData(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="users">
      <div className="filters">
        <SearchSelect setSelectedUser={setSelectedUser} />
        <Search setSearchTerm={setSearchTerm} />
      </div>
      {isLoading ? (
        <div className="loading-wrapper">
          <Loading />
        </div>
      ) : (
        <Table
          className="users-table"
          columns={columns}
          dataSource={tableData}
          pagination={false}
        />
      )}
    </div>
  );
};

export default Users;
