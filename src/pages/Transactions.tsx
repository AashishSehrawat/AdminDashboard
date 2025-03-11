import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Jin Wong",
    amount: 4500,
    discount: 500,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transactions/ksdnfkjsdfx">Manage</Link>,
  },
  {
    user: "Tony Stark",
    amount: 5000,
    discount: 100,
    quantity: 2,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transactions/ksdnfkjsdfx">Manage</Link>,
  },
  {
    user: "Cha Cha",
    amount: 9000,
    discount: 500,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transactions/ksdnfkjsdfx">Manage</Link>,
  },
];

function Transactions() {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "transactionBox", "Transactions", true),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="transaction">
        {Table()}
      </main>
    </div>
  );
}

export default Transactions;
