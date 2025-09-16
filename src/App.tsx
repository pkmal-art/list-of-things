import React from 'react';
import './index.css';
import { useItems } from './hooks/useItems';
import { ItemList } from './components/ItemList';
import { AddItemForm } from './components/AddItemForm';

const App: React.FC = () => {

  const { items, addItem, removeItem } = useItems([
    { id: "1", name: "Куртка" },
    { id: "2", name: "Кроссовки" },
    { id: "3", name: "Рюкзак" },
  ])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Список вещей</h1>
        <AddItemForm addItem={addItem }/>
        <hr className="my-4" />
        <ItemList items={items} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
