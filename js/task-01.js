const categoriesListRefs = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesListRefs.length} категории.`);

categoriesListRefs.forEach(category => {
  console.log(`Категория: ${category.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${category.querySelectorAll('li').length}`,
  );
});