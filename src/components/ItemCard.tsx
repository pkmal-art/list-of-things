import React, { useEffect, useState } from "react";
import { Item } from "../types/type";

interface ItemCardProps {
  item: Item;
  onDelete: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timeout);
  }, []);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(onDelete, 300);
  };

  return (
    <div className={`flex justify-between items-center bg-sky-100 rounded-xl px-4 py-2 shadow-sm
      transition-all duration-300 ease-in-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}  hover:shadow-md`}
    >
      <span className="text-gray-800">{item.name}</span>
      <button
        onClick={handleDelete}
        className="text-red-500  hover:text-red-700 font-semibold transition"
      >
        ✕
      </button>
    </div>
  );
};