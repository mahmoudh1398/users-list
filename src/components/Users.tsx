import { Table } from "antd";
import type { TableProps } from "antd";
import "assets/styles/components/Users.css";
import SelectWithSearch from "./SelectWithSearch";
import Search from "./Search";
import Loading from "./Loading";
import { UserInTableEntityModel } from "model/entity/user.model";
import { useUsers } from "utils/hooks/users";
import { convertToTableData } from "utils/pure-function/convertToTableData";

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
    title: "company",
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
];

const Users = () => {
  const { data, isSuccess, isLoading, isError } = useUsers();
  let tableData: UserInTableEntityModel[] = [];
  if (isSuccess && data) {
    tableData = convertToTableData(data);
  }
  if (isError) {
    tableData = [];
  }

  return (
    <div className="users">
      <div className="filters">
        <SelectWithSearch />
        <Search />
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
