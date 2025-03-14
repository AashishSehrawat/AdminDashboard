import { useState, ChangeEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader :FileReader = new FileReader();

    if(file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      }
    }
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <article>
          <form>
            <h2>New Product</h2>
            <div className="formNewProduct">
              <div className="formDataNewProduct">
                <label>Name</label>
                <input
                  required
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formDataNewProduct">
                <label>Price</label>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div className="formDataNewProduct">
                <label>Stock</label>
                <input
                  required
                  type="number"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                />
              </div>
              <div className="formDataNewProduct"> 
                <label>Photo</label>
                <input
                  required
                  type="file"
                  onChange={changeImageHandler}
                />
              </div>
            </div>
            {
              photo && <img src={photo} alt="image" style={{width: "100px"}}/>
            }
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
