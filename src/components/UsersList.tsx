import { Table } from "antd";
import type { TableProps } from "antd";
import "assets/styles/components/UsersList.css";
import SelectWithSearch from "./SelectWithSearch";
import Search from "./Search";

interface DataType {
  id: number;
  key: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const columns: TableProps<DataType>["columns"] = [
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

const data: DataType[] = [
  {
    id: 1,
    key: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const UsersList = () => {
  return (
    <div className="users-list">
      <div className="filters">
        <SelectWithSearch />
        <Search />
      </div>
      <Table
        className="users-table"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default UsersList;
