import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/u/k/u/-original-imagzry3ffdffrwh.jpeg?q=90&crop=false";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "ksdnfkjsdfx",
    quantity: 4,
    price: 2000,
  },
];

const ProductCart = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transaction-product-cart">
      <img src={photo} alt="" />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};

const TransactionManagement = () => {
  const [order, setorder] = useState<OrderType>({
    name: "Luffy",
    address: "The Sunny",
    city: "Log Town",
    country: "Elbaf",
    state: "Loki",
    pincode: 131323,
    status: "Processing",
    subTotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 - 0 + 1200,
    orderItems,
    _id: "bdvhbkdjavl",
  });

  const updateHandler = () => {
    setorder((prev) => ({
      ...prev, 
      status:
      prev.status === "Processing"
        ? "Shipped"
        : prev.status === "Shipped"
        ? "Delivered"
        : "Delivered", 
    }))
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="transactionManagement">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCart
              name={item.name}
              photo={item.photo}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
            />
          ))}
        </section>
        <article>
          <h2>Order Info</h2>
          <div>
            <div className="userOrderInfo">
              <h4>User Info</h4>
              <p>Name: {order.name}</p>
              <p>
                Address:{" "}
                {`${order.address}, ${order.city}, ${order.state}, ${order.country}, ${order.pincode}`}
              </p>
            </div>
            <div className="amountOrderInfo">
              <h4>Amount Info</h4>
              <p>Subtotal: {order.subTotal}</p>
              <p>Shipping Charges: {order.shippingCharges}</p>
              <p>Tax: {order.tax}</p>
              <p>Discount: {order.discount}</p>
              <p>Total: {order.total}</p>
            </div>
            <div className="statusOrderInfo">
              <h4>Status Info</h4>

              <p>
                Status:{" "}
                <span
                  className={
                    order.status == "Delivered"
                      ? "green"
                      : order.status == "Processing"
                      ? "red"
                      : "purple"
                  }
                >
                  {order.status}
                </span>
              </p>
            </div>
          </div>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

export default TransactionManagement;
