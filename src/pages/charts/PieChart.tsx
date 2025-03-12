import AdminSidebar from "../../components/AdminSidebar";
import PieChartComponent from "../../components/PieChartComponent";
import DoughnutChart from "../../components/DoughnutChart";
import { categories } from "../../assets/data.json";

const PieChart = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div className="pieChartComponent">
            <PieChartComponent
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              background={[
                `hsl(110, 80%, 80%)`,
                `hsl(110, 80%, 50%)`,
                `hsl(110, 40%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        <section>
          <div className="pieChartComponent">
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              background={categories.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 60%`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div className="pieChartComponent">
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              data={[10, 6]}
              background={categories.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 60%`
              )}
              offset={[0, 70]}
              cutout={100}
            />
          </div>
          <h2>Stock Avaliable</h2>
        </section>

        <section>
          <div className="pieChartComponent">
            <DoughnutChart
              labels={[
                "Market Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[20, 3, 3, 12, 8]}
              background={[
                "hsl(30, 80%, 55%)",
                "hsl(0, 80%, 60%)",
                "hsl(25, 40%, 40%)",
                "hsl(120, 80%, 50%)",
                "hsl(220, 80%, 60%)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div className="pieChartComponent">
            <PieChartComponent
              labels={["0-18 (Teen)", "19-25 (Young Adult)", "26-35 (Adult)", "36-50 (Middle Age)", "51+ (Senior)"]}
              data={[15, 25, 30, 20, 10]}
              background={[
                "hsl(210, 90%, 60%)",  // Blue (Teen)
                "hsl(120, 80%, 50%)",  // Green (Young Adult)
                "hsl(45, 100%, 50%)",  // Yellow (Adult)
                "hsl(30, 90%, 50%)",  // Orange (Middle Age)
                "hsl(0, 80%, 55%)",   // Red (Senior)
              ]}
              offset={[0, 0, 0, 0, 40]}
            />
          </div>
          <h2>User Age Gap</h2>
        </section>

        <section>
          <div className="pieChartComponent">
            <DoughnutChart
              labels={[
                "Admin",
                "Customers",
              ]}
              data={[40, 250]}
              background={[
                "hsl(30, 80%, 55%)",
                "hsl(0, 80%, 60%)",
              ]}
              offset={[0, 40]}
              cutout={90}
            />
          </div>
          <h2></h2>
        </section>
      </main>
    </div>
  );
};

export default PieChart;
