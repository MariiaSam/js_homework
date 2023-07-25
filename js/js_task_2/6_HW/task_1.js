const categories = document.querySelector('#categories');// для знаходимо елемент з ідентифікатором "categories", а саме, список УЛ з ідентифікатором "categories" і зберегли його у змінній categories.


console.log(`Number of categories: ${categories.children.length}`);// вивощимо к-сть дочірніх елементів у списку УЛ з ідентифікатором - categories. за допомогою властивості children.length - к-сть елементів item в списку
console.log(" ");

const items = document.querySelectorAll('.item');// вик-ня querySelectorAll() для знаходження всіх елементів з класом "item"

items.forEach((item) => {
// вик-ня forEach для перебору коного елемента колекції  items

   console.log(`Category: ${item.firstElementChild.textContent}`); //firstElementChild - перший дочірній елемент, textContent - його контент

   console.log(`Elements: ${item.lastElementChild.children.length}`);//всі елементи списку ul, які є дочірніми елементами кожного елемента з класом item, використовуючи item.lastElementChild, children.length - к-сть дочірніх елементів

   console.log(" ");// лдя ств пустого рядка у консолі
});
