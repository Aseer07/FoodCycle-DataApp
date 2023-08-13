import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./components/data";
import { Product } from "./types";
import menu from "./components/data";

function App() {
  const [menuItems, setMenuItems] = useState<Product[]>(items);
  const [categories] = useState<string[]>([
    ...new Set(menu.map((item) => item.category)),
  ]);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <div className="section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </>
  );
}

export default App;
