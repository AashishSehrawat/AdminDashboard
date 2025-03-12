import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader.tsx";

const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Transactions = lazy(() => import("./pages/Transactions.tsx"));
const Products = lazy(() => import("./pages/Products.tsx"));
const Customers = lazy(() => import("./pages/Customers.tsx"));
const NewProduct = lazy(() => import("./pages/management/NewProduct.tsx"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement.tsx"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement.tsx"));
const BarChart = lazy(() => import("./pages/charts/BarChart.tsx"));
const LineChart = lazy(() => import("./pages/charts/LineChart.tsx"));
const PieChart = lazy(() => import("./pages/charts/PieChart.tsx"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch.tsx"))
const Coupon = lazy(() => import("./pages/apps/Coupon.tsx"))
const Toss = lazy(() => import("./pages/apps/Toss.tsx"))

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={ <Dashboard/> } />
          <Route path="/" element={ <Dashboard/> } />
          <Route path="/admin/transactions" element={ <Transactions/> } />
          <Route path="/admin/products" element={ <Products/> } />
          <Route path="/admin/customers" element={ <Customers/> } />

          {/* Chart */}
          <Route path="/admin/chart/bar" element={ <BarChart/> } />
          <Route path="/admin/chart/line" element={ <LineChart/> } />
          <Route path="/admin/chart/pie" element={ <PieChart/> } />

          {/* Apps */}
          
          <Route path="/admin/app/stopwatch" element={ <Stopwatch/> } />
          <Route path="/admin/app/coupon" element={ <Coupon/> } />
          <Route path="/admin/app/toss" element={ <Toss/> } />

          {/* Management  */}
          <Route path="/admin/products/new" element={ <NewProduct /> } />
          <Route path="/admin/products/:id" element={ <ProductManagement /> } />
          <Route path="/admin/transactions/:id" element={ <TransactionManagement /> } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
