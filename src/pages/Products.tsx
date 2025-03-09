import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import laptop from '../assets/products/laptop.jpeg';
import tablet from '../assets/products/tab.jpeg';
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    photo: <img src={laptop} alt="macbook" />,
    name: "Macbook",
    price: 100000,
    stock: 6,
    action: <Link to="/admin/products/ksdnfkjsdfx">Manage</Link>,
  },
  {
    photo: <img src={laptop} alt="macbook" />,
    name: "Macbook",
    price: 100000,
    stock: 6,
    action: <Link to="/admin/products/ksdnfkjsdfx">Manage</Link>,
  },
  {
    photo: <img src={laptop} alt="macbook" />,
    name: "Macbook",
    price: 100000,
    stock: 6,
    action: <Link to="/admin/products/ksdnfkjsdfx">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },
  {
    photo: <img src={tablet} alt="tablet" />,
    name: "Ipad",
    price: 30000,
    stock: 3,
    action: <Link to="/admin/products/sdsdssdsd">Manage</Link>,
  },

];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "productBox", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product">
        {Table()}
        <Link to="/admin/products/new"><FaPlus/></Link>  
      </main>
      
    </div>
  );
};

export default Products;
