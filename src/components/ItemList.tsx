import React from "react";
import { Item } from "../types/type";
import { ItemCard } from "./ItemCard";

interface ItemListProps {
  items: Item[];
  removeItem: (id: string) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, removeItem }) => {
  return (
    <div className="flex flex-col gap-3">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard key={item.id} item={item} onDelete={() => removeItem(item.id)} />
        ))
      ) : (
        <p className="text-gray-400 text-center">Список пуст</p>
      )}
    </div>
  );
};