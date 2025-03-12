import { useCallback, useRef, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Coupon = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [length, setLength] = useState<number>(6);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [charaterAllowed, setCharacterAllowed] = useState<boolean>(false);
  const [showCoupon, setShowCoupon] = useState<boolean>(false);

  const refCoupon = useRef(null);

  const couponGenerator = useCallback(
    (couponData: string) => {
      let coup = couponData;

      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (numberAllowed) str += "0123456789";
      if (charaterAllowed) str += "!@#$%^&*()";

      for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length);
        coup += str.charAt(index);
      }

      setShowCoupon(true);
      setCoupon(coup);
    },
    [length, numberAllowed, charaterAllowed, setCoupon]
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="appContainer">
        <h1>Coupon</h1>
        <section>
          <form className="couponForm">
            <div className="textForm">
              <input
                type="text"
                placeholder="Text to include" 

                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            <div className="checkboxForm">
              <div>
                <input
                  type="checkbox"
                  name="Numbers"
                  defaultChecked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) => !prev)}
                />
                <label htmlFor="">Number</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Characters"
                  defaultChecked={charaterAllowed}
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                />
                <label htmlFor="">Characters</label>
              </div>
            </div>
            <button type="button" onClick={() => couponGenerator(input)}>
              Generate
            </button>
            {showCoupon && (
              <input type="text" value={coupon} readOnly ref={refCoupon} />
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Coupon;
