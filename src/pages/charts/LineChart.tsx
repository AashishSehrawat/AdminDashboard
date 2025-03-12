import AdminSidebar from "../../components/AdminSidebar";
import LineChartComponent from "../../components/LineChartComponent";

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
];

const LineChart = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Line Charts</h1>
        <section style={{ padding: "4rem" }}>
          <LineChartComponent
            data={[
              200, 556, 778, 455, 990, 1444, 256, 447, 1200, 346, 900, 1200,
            ]}
            label="Users"
            backgroundColor="rgba(112, 215, 255, 0.3)"
            borderColor="rgba(0, 123, 255, 1)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>

        <section style={{ padding: "4rem" }}>
          <LineChartComponent
            data={[
              320, 450, 670, 500, 890, 1200, 980, 760, 1340, 900, 1100, 1500,
            ]}
            label="Total Products"
            backgroundColor="rgba(155, 89, 182, 0.3)" // Soft Lavender (faded purple)
            borderColor="rgba(142, 68, 173, 1)" // Deep Purple
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section style={{ padding: "4rem" }}>
          <LineChartComponent
            data={[
              5000, 8200, 12000, 9000, 15000, 18000, 13000, 21000, 19500, 23000,
              25000, 27000,
            ]}
            label="Total Revenue"
            backgroundColor="rgba(233, 150, 122, 0.3)" // Soft Salmon
            borderColor="rgba(205, 92, 92, 1)" // Indian Red
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>

        <section style={{ padding: "4rem" }}>
          <LineChartComponent
            data={[
              500, 1200, 1500, 1100, 1800, 2000, 1700, 2200, 2500, 2700, 3000,
              3200,
            ]}
            label="Total Discount"
            backgroundColor="rgba(154, 205, 50, 0.3)" // Yellow-Green (Light fade)
            borderColor="rgba(85, 107, 47, 1)" // Dark Olive Green
            labels={months}
          />
          <h2>Discount Alloted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineChart;
