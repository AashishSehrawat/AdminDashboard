import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import person1 from "../assets/customer/christopher-campbell..._imresizer.jpg";
import person2 from "../assets/customer/stefan-stefancik-QXe..._imresizer.jpg";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    avatar: <img src={person1} alt="" />,
    name: "Sarah Stewart",
    gender: "female",
    email: "sarah@gmail.com",
    role: "User",
    action: <button><FaTrash /></button>,
  },
  {
    avatar: <img src={person2} alt="" />,
    name: "Paisley Powell",
    gender: "female",
    email: "paisley@gmail.com",
    role: "User",
    action: <button><FaTrash /></button>,
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "customerBox", "Customers", true),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="customers">{Table()}</main>
    </div>
  );
};

export default Customers;
