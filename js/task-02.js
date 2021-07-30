const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredientItem = ingridient => {
  const ingridientRef = document.createElement('li');
  ingridientRef.textContent = ingridient;
  return ingridientRef;
};

ingredientsRef.append(...ingredients.map(createIngredientItem));

