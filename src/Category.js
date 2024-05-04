import { useState } from 'react';
import Card from "./Card";
import data from "./DataSet.json";
import './css/category.css';

function Category() {
  const [dataChange, setDataChange] = useState('all'); 

  const handleFilterChange = (category) => {
    setDataChange(category); 
  };

  // Filter products based on dataChange state
  const filteredProducts = data.filter((product) => {
    return dataChange === 'all' || product.category === dataChange;
  });

  return (
    <div className='category'>
      <div className='categoryButton'>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('cleaners')}>Cleaners</button>
        <button onClick={() => handleFilterChange('cosmetics')}>Cosmetics</button>
      </div>
      <ul>
        {/* Map over filteredProducts instead of data */}
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Card data={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
