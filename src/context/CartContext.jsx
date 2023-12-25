import { useState } from "react";
import { createContext } from "react";

export const CoursesCartContext = createContext({});

function CartContext({ children }) {
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const addToCart = (item) => {
    const foundItem = items.find((course) => course.id === item.id);
    !foundItem ? setItems([...items, item]) : null;
    const filteredItems = savedItems.filter((course) => course.id !== item.id);
    setSavedItems(filteredItems);
  };
  const addAllToCart = (courses) => {
    const foundItem = courses.find(
      (course) => course !== items.map((item) => item)
    );
    const allItems = courses.filter((item) => item !== foundItem);
    setItems([...items, ...allItems]);
  };
  const removeFromCart = (item) => {
    const filteredItems = items.filter((course) => course.id !== item.id);
    setItems(filteredItems);
  };
  const saveItem = (item) => {
    const foundItem = savedItems.find((course) => course.id === item.id);
    !foundItem ? setSavedItems([...savedItems, item]) : null;
    const filteredItems = items.filter((course) => course.id !== item.id);
    setItems(filteredItems);
  };
  const removeFromSaved = (item) => {
    const filteredItems = savedItems.filter((course) => course.id !== item.id);
    setSavedItems(filteredItems);
  };
  return (
    <CoursesCartContext.Provider
      value={{
        items,
        addToCart,
        addAllToCart,
        removeFromCart,
        savedItems,
        saveItem,
        removeFromSaved,
      }}
    >
      {children}
    </CoursesCartContext.Provider>
  );
}

export default CartContext;
