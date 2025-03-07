import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { preconnect } from "react-dom";
import Charts from "../components/Charts";

function Dashboard() {
  // wiget component
  interface widget {
    heading: string;
    amount?: boolean;
    value: number;
    percentage: number;
    color: string;
  }

  const WidgetItem = ({
    heading,
    value,
    amount,
    percentage,
    color,
  }: widget) => (
    <div className="widgetBlock">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : `${value}`}</h4>
        <div>
          {percentage > 0 ? (
            <span className="greenWidget">
              <HiTrendingUp /> +${percentage}%
            </span>
          ) : (
            <span className="redWidget">
              <HiTrendingDown /> ${percentage}%
            </span>
          )}
        </div>
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
          ${color} 0deg ${Math.abs(percentage) * 3.6}deg,
          white ${Math.abs(percentage) * 3.6}deg 360deg 
        )`,
        }}
      >
        <span>{percentage}%</span>
      </div>
    </div>
  );

  // Graph Inventory component
  interface inventory {
    heading: string;
    color: string;
    percent: number;
  }

  const InventoryGraph = ({ heading, color, percent }: inventory) => (
    <div className="inventoBlock">
      <p>{heading}</p>
      <div
        className=""
        style={{
          "--percent": `${percent}%`,
          "--barColor": color
        } as React.CSSProperties}
      ></div>
      <span>{percent}%</span>
    </div>
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        {/* bar section */}
        <div className="dashboardBar">
          <div className="barSearch">
            <FaSearch className="reactIconsBar" />
            <input type="text" placeholder="Search for data, users, docs" />
          </div>
          <div className="barNotification">
            <Link to="">
              <FaRegBell className="reactIconsBar" />
            </Link>
            <Link to="">
              <FaUser className="reactIconsBar" />
            </Link>
          </div>
        </div>

        {/* widget Item section */}
        <div className="widgetSectionDashboard">
          <WidgetItem
            heading="Revenue"
            value={340000}
            amount={true}
            percentage={40}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            heading="Users"
            value={300}
            amount={false}
            percentage={-14}
            color="rgb(0, 191, 255)"
          />
          <WidgetItem
            heading="Transactions"
            value={2000}
            amount={false}
            percentage={80}
            color="rgb(255, 238, 0)"
          />
          <WidgetItem
            heading="Products"
            value={10000}
            amount={false}
            percentage={30}
            color="rgb(153, 0, 255)"
          />
        </div>

        {/* graph section */}
        <div className="graphDashboradSection">
          <div className="revenueGraph">
            <h2>REVENUE & TRANSACTIONS</h2>
            <div className="revenueChart">
              <Charts 
                data_1={[5000, 7000, 8000, 9000, 10000, 12000, 15000]}
                data_2={[4000, 6000, 7500, 8500, 9500, 11000, 13000]}
                title_1="Revenue"
                title_2="Transactions"
                bgColor_1="#0080FF"
                bgColor_2="#66b2ff"
              
              />
            </div>
          </div>
          <div className="invoGraph">
            <h3>INVENTORY</h3>
            <div className="invoData">
              <InventoryGraph heading="Laptops" color="Lime" percent={40}/>
              <InventoryGraph heading="Shoes" color=" #9900cc" percent={90}/>
              <InventoryGraph heading="Cameras" color="#ffff00" percent={80}/>
              <InventoryGraph heading="Jeans" color="#0000ff" percent={60}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
