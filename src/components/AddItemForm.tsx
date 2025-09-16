import React, { useState } from "react";


interface AddItemFormProps {
  addItem: (name: string) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите название"
        className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-blue-400" 
      />
      <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-800 transition">
        Добавить
      </button>      
    </form>
  );
};