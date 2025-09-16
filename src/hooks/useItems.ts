import { useState, useEffect } from "react";
import { Item } from "../types/type";

export function useItems(initialItems: Item[] = []) {
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : initialItems;
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (name:string) => {
    if (name.trim()) {
      const capitalized = name.trim().charAt(0).toUpperCase() + name.trim().slice(1);

      const newItem: Item = { id: crypto.randomUUID(), name: capitalized };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, addItem, removeItem};
}