const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  //масив, який потрібно додати,Ю як ЛІ в УЛ, створити нові ліжки в Улкі
  
  const ingredientsList = document.querySelector('#ingredients');// 1. Знаходимо <ul> за його id
  
  // 2. ств новий масив ЛІ - ingredientsItems перебираючим методом map
  const ingredientsItems = ingredients.map((ingredient) => {
      // 3.  ств новий  Елемент ЛІ - item
    const item = document.createElement('li');
        item.textContent = ingredient; // встановлення текстового змісту textContent = назві елементу масиву
        item.classList.add('item'); //додаємо клас item до ЛІ
        return item;
  });
  
  ingredientsList.append(...ingredientsItems);// вст всі ЛІ однією операцією
  




// const gallery = document.querySelector('.gallery');

// const galleryMarkup = images.map(({ url, alt }) => 
//  `<li><img src="${url}" alt="${alt}" width="300" height="300"></li>`).join('');

// gallery.insertAdjacentHTML('beforeend', galleryMarkup);

 