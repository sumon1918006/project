import { useState } from "react";
import "./App.css";
import Banner from "./assets/components/Banner/Banner";
import Items from "./assets/components/Items/Items";
import Nav from "./assets/components/Nav/Nav";
import Order from "./assets/components/Order/Order";
import OurRecepie from "./assets/components/OurRecepie/OurRecepie";

function App() {
  const [order, setOrderItem] = useState([]);

  const handleWantCook = (item,toster) => {
    
    if (order.includes(item)) {
      toster();
    } 
    else {
      const newOrder = [...order, item];
      setOrderItem(newOrder);
    }
    
  };

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

    <OurRecepie></OurRecepie>
      <div className="flex mt-12 gap-6">
        <Items handleWantCook={handleWantCook}></Items>
        <Order order={order}></Order>
      </div>
    </>
  );
}

export default App;
