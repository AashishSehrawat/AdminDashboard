import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader.tsx";

const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Transactions = lazy(() => import("./pages/Transactions.tsx"));
const Products = lazy(() => import("./pages/Products.tsx"));
const Customers = lazy(() => import("./pages/Customers.tsx"));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={ <Dashboard/> } />
          <Route path="/admin/transactions" element={ <Transactions/> } />
          <Route path="/admin/products" element={ <Products/> } />
          <Route path="/admin/customers" element={ <Customers/> } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
