import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/Dashboard/DashboardPage";
import EmployeePage from "./components/Employee/EmployeePage";
import InventoryPage from "./components/Inventory/InventoryPage";
import ItemDetail from "./components/Inventory/ItemDetail";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import TicketPage from "./components/Ticket/TicketPage";
import "./style/style.css";

function App() {
  const [inventoryArray, setInventoryArray] = useState([]);
  const [moreDetailItem, setMoreDetailItem] = useState({});
  useEffect(() => {
    fetch("/inventories")
      .then((res) => res.json())
      .then(setInventoryArray);
  }, []);

  function handleMoreDetails(id) {
    const selectedInventoryItem = inventoryArray.find((item) => item.id === id);
    setMoreDetailItem(selectedInventoryItem);
  }


  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <NavBar />
          <MainPage />
        </Route>
        <Route exact path="/ticket">
          <NavBar />
          <TicketPage />
        </Route>
        <Route exact path="/inventory">
          <NavBar />
          <InventoryPage
            inventoryArray={inventoryArray}
            handleMoreDetails={handleMoreDetails}
          />
        </Route>
        <Route exact path="/inventory_item">
          <NavBar />
          <ItemDetail {...moreDetailItem} />
        </Route>
        <Route exact path="/dashboard">
          <NavBar />
          <DashboardPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/employee">
          <EmployeePage inventoryArray={inventoryArray} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
