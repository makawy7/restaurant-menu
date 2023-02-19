import Item from "./Item";
import Category from "./Category";
import menu from "./data";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(menu);
  let categories = menu.map((item) => item.category);
  categories = ['all', ...new Set(categories)];

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
        <Category setCategory={setCategory} categories={categories} />
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
