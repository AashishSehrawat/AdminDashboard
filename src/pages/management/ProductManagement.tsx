import AdminSidebar from "../../components/AdminSidebar";
import { useState, ChangeEvent, FormEvent } from "react";

const img =
  "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/u/k/u/-original-imagzry3ffdffrwh.jpeg?q=90&crop=false";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(4);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <div className="descriptionProductManagement">
          <div>
            {stock > 0 ? (
              <span className="green">{stock} Avaliable</span>
            ) : (
              <span className="red">Out of Stock</span>
            )}
            <p>ID - ksdnfkjsdfx</p>
            <div>
              <img src={photo} alt="product image" />
              <p>{name}</p>
              <span>${price}</span>
            </div>
          </div>
        </div>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage Product</h2>
            <div className="formNewProduct">
              <div className="formDataNewProduct">
                <label>Name</label>
                <input
                  required
                  type="text"
                  placeholder="Product Name"
                  value={nameUpdate}
                  onChange={(e) => setNameUpdate(e.target.value)}
                />
              </div>
              <div className="formDataNewProduct">
                <label>Price</label>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  value={priceUpdate}
                  onChange={(e) => setPriceUpdate(Number(e.target.value))}
                />
              </div>
              <div className="formDataNewProduct">
                <label>Stock</label>
                <input
                  required
                  type="number"
                  placeholder="Stock"
                  value={stockUpdate}
                  onChange={(e) => setStockUpdate(Number(e.target.value))}
                />
              </div>
              <div className="formDataNewProduct">
                <label>Photo</label>
                <input type="file" onChange={changeImageHandler} />
              </div>
            </div>
            {photoUpdate && (
              <img src={photoUpdate} alt="image" style={{ width: "100px" }} />
            )}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
