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
      const newItem: Item = { id: crypto.randomUUID(), name: name.trim() };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, addItem, removeItem};
}