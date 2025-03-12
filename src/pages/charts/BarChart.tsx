import AdminSidebar from "../../components/AdminSidebar";
import Charts from "../../components/Charts";

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octember",
  "November",
  "December",
]

const BarChart = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <Charts
            data_1={[300, 224, 150, 500, 457, 990]}
            data_2={[350, 200, 200, 550, 456, 890]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260, 50%, 30%)`}
            bgColor_2={`hsl(360, 90%, 90%)`}
          />
          <h2>Top selling products and top customers</h2>
        </section>
        <section>
          <Charts
            data_1={[300, 224, 150, 500, 457, 990, 300, 224, 150, 500, 457, 990]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="#9999ff"
            bgColor_2={``}
            horizontal= {true}
            labels={months}
          />
          <h2>Order throughout the year</h2>
        </section>
        

      </main>
    </div>
  );
};

export default BarChart;
