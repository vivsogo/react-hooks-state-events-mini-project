import React from "react";

function CategoryFilter({categories,handleClickCategory,selectedCategory}) {
  const buttonElements = categories.map(category => {
    return(
     <button 
        className={category === selectedCategory ? "selected" : null}
        key={category} 
        onClick={()=> handleClickCategory(category)}>
        {category}
     </button> )

  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonElements}
    </div>
  );
}

export default CategoryFilter; 
 