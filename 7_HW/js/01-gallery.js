import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openImg); //слухач події на конт для відкриття зображень

function createGallery(arr) {
 return galleryItems.map(({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}' 
        data-source='${original}' alt='${description}'/>
        </a>
        </li>`
    )
    .join('');
};
  gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
 //ф-ція для ств HTML розмітки галареї

const instance //екземпляр модального вікна за допомогою бібліотеки basicLightbox,
= basicLightbox.create(
  //сметод створює новий екземпляр модального вікна, бібліотека створює екземпляр модального вікна з пустим вмістом img
  `<img width='' height='' src=''>`,
  {
    onShow: (instance) => {
      document.addEventListener('keydown', closeModal);
    },//коли модальне вікно відкривається,встановлюємо прослуховування події 
    onClose: (instance) => {
      document.removeEventListener('keydown', closeModal);
    },//коли модальне вікно закрив,знімаємо прослуховування події 
  }
);

//екземпляр модального вікна за допомогою бібліотеки basicLightbox


function openImg(evt) {
  //ф-ція відкриття зобр
  evt.preventDefault(); //заборона кор-чу перех на ін стор

  const datasetSource = evt.target.dataset.source; //від орг зобр з атрибуту data-source(був в ТЗ до ДЗ 7), приклад Рисіча на лекції 13
  if (!datasetSource) return;

  instance.element().querySelector('img').src = datasetSource; //вст і відобр орг зобр в basicLightbox. Цей рядок коду оновлює значення атрибуту src зображення в модальному вікні. Ми звертаємося до елемента зображення, яке міститься в модальному вікні, за допомогою методу 
  instance.show();
}

function closeModal(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  };
};
 //ф-ція закриття зобр кнопкою