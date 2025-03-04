import logo from "../assets/logo.png";
import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { RiLineChartFill } from "react-icons/ri";
import { RiPieChartFill } from "react-icons/ri";
import { RiTimerFill } from "react-icons/ri";
import { RiCoupon2Fill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IconType } from "react-icons";

const AdminSidebar = () => {
  const location = useLocation();

  interface LiProps {
    text: string;
    url: string;
    location: Location;
    Icon: IconType;
  }

  const Li = ({ url, text, location, Icon }: LiProps) => (
    <li>
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "#0095ff" : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );

  return (
    <aside>
      <div className="logo">
        <img src={logo} alt="" width="40px" />
        <span>BuyNest</span>
      </div>
      <div className="sidebarFunction">
        <div className="sidebarDashboard">
          <h4>Dashboard</h4>
          <div>
            <ul>
              <Li
                url="/admin/dashboard"
                text="Dashboard"
                Icon={RiDashboardFill}
                location={location}
              />
              <Li
                url="/admin/products"
                text="Products"
                Icon={RiShoppingBag3Fill}
                location={location}
              />
              <Li
                url="/admin/customers"
                text="Customers"
                Icon={IoIosPeople}
                location={location}
              />
              <Li
                url="/admin/transactions"
                text="Transactions"
                Icon={AiFillFileText}
                location={location}
              />
            </ul>
          </div>
        </div>
        <div className="sidebarChart">
          <h4>Chart</h4>
          <div>
            <ul>
              <Li
                url="/admin/chart/bar"
                text="Bar"
                Icon={RiBarChartFill}
                location={location}
              />
              <Li
                url="/admin/chart/pie"
                text="Pie"
                Icon={RiPieChartFill}
                location={location}
              />
              <Li
                url="/admin/chart/line"
                text="Line"
                Icon={RiLineChartFill}
                location={location}
              />
            </ul>
          </div>
        </div>
        <div className="sidebarApps">
          <h4>Apps</h4>
          <div>
            <ul>
              <Li
                url="/admin/app/stopwatch"
                text="Stopwatch"
                Icon={RiTimerFill}
                location={location}
              />
              <Li
                url="/admin/app/coupon"
                text="Coupon"
                Icon={RiCoupon2Fill}
                location={location}
              />
              <Li
                url="/admin/app/toss"
                text="Toss"
                Icon={RiMoneyDollarCircleFill}
                location={location}
              />
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
