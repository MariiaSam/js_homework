// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// 1 var

// const list = document.querySelector(".js-list");
// const markup = cars.map(({ id, model, type, price, img }) => {
//   const li = document.createElement("li");
//   const liImg = document.createElement("img");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const p = document.createElement("p");

//   li.setAttribute("data-car-id", id);
//   liImg.src = img;
//   liImg.alt = type;
//   h2.textContent = model;
//   h3.textContent = type;
//   p.textContent = price;
//   liImg.classList.add("liImg");

//   li.append(liImg, h2, h3, p);

//   return li
// });


// // console.log(markup)
// list.append(...markup)


// 2 var

const list = document.querySelector(".js-list");

const markup = cars.map(({ id, model, type, price, img }) => 
    `<li data-car-id="${id}" style="color:blue; font-size=50px">
    <img src="${img}" alt="${type}" class="liImg">
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
</li>`).join('')

list.insertAdjacentHTML('beforeend', markup)







