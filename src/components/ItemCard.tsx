import React from "react";
import { Item } from "../types/type";

interface ItemCardProps {
  item: Item;
  onDelete: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-2 shadow-sm hover:shadow-md">
      <span className="text-gray-800">{item.name}</span>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 font-semibold transition"
      >
        ✕
      </button>
    </div>
  )
}