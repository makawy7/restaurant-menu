import Item from "./Item";
import menu from "./data";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(menu);
  const setCategory = (catName) => {
    if (catName === "all") {
      setItems(menu);
    } else {
      setItems(menu.filter((item) => item.category === catName));
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={() => setCategory("all")}>
            all
          </button>
          <button
            className="filter-btn"
            onClick={() => setCategory("breakfast")}
          >
            breakfast
          </button>
          <button className="filter-btn" onClick={() => setCategory("lunch")}>
            lunch
          </button>
          <button className="filter-btn" onClick={() => setCategory("shakes")}>
            shakes
          </button>
        </div>
        <div className="section-center">
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
