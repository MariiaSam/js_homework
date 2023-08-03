const trainGallery = [
    {
      preview:
      'https://static7.depositphotos.com/1246529/736/i/600/depositphotos_7360325-stock-photo-turkey.jpg',
      original:
  'https://static7.depositphotos.com/1246529/736/i/600/depositphotos_7360325-stock-photo-turkey.jpg',
  description: 'Хочу в Стамбул',
  },
  {
    preview:
      'https://w.forfun.com/fetch/a3/a31ce7edf8e5a79350929ceba5cd399f.jpeg?h=1200&r=0.5',
    original:
      'https://w.forfun.com/fetch/a3/a31ce7edf8e5a79350929ceba5cd399f.jpeg',
    description: 'Lighthouse Coast Sea',
  },
  {
    preview:
      'https://w.forfun.com/fetch/ba/ba35f150d730a7e689c727f8e46db31d.jpeg?h=1200&r=0.5',
    original:
      'https://w.forfun.com/fetch/ba/ba35f150d730a7e689c727f8e46db31d.jpeg',
    description: 'Lighthouse Coast Sea',
  },
  {
    preview:
      'https://w.forfun.com/fetch/6f/6f71da9ccaf6eec8574b533a6f329b57.jpeg?h=1200&r=0.5',
    original:
      'https://w.forfun.com/fetch/6f/6f71da9ccaf6eec8574b533a6f329b57.jpeg',
    description: 'Кападокия',
  },
  {
    preview:
    'https://w.forfun.com/fetch/e0/e089409226a3bf522c73fbeb0291d15f.jpeg?h=1200&r=0.5',
    original:
  'https://w.forfun.com/fetch/e0/e089409226a3bf522c73fbeb0291d15f.jpeg',
  description: 'Lighthouse Coast Sea',
  },
  {
  preview:
    'https://static6.depositphotos.com/1006054/606/i/600/depositphotos_6061747-stock-photo-beyoglu-district-in-istanbul.jpg',
  original:
    'https://static6.depositphotos.com/1006054/606/i/600/depositphotos_6061747-stock-photo-beyoglu-district-in-istanbul.jpg',
  description: 'Lighthouse Coast Sea',
  },{
  preview:
    'https://w.forfun.com/fetch/6d/6d8b520bebf61cf1e2b030cfc826e79e.jpeg?h=1200&r=0.5',
  original:
    'https://w.forfun.com/fetch/6d/6d8b520bebf61cf1e2b030cfc826e79e.jpeg',
  description: 'Мінарет'
  },
  {
  preview:
    'https://w.forfun.com/fetch/8d/8d8df3b3787ce7b6ab7ab17b9b1216d2.jpeg?h=1200&r=0.5',
  original:
    'https://w.forfun.com/fetch/8d/8d8df3b3787ce7b6ab7ab17b9b1216d2.jpeg',
  description: 'Софія',
  },
  {
  preview:
    'https://w.forfun.com/fetch/34/34ceaa0ab7eea341733d647d9e3d86ad.jpeg',
  original:
    'https://w.forfun.com/fetch/34/34ceaa0ab7eea341733d647d9e3d86ad.jpeg',
  description: 'нічний Стамбул',
  },

  ];
  
  const galleryCity = document.querySelector('.gallery');
  galleryCity.insertAdjacentHTML('beforeend',createGalleryCity(trainGallery));

  function createGalleryCity (arr) {
    return trainGallery.map(({ preview, original, description }) =>
    `<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img class='gallery__image' src='${preview}' 
    data-source='${original}' alt='${description}'/>
    </a>
    </li>`
)
.join('');
};

galleryCity.addEventListener('click', handlerImg)

const instance = basicLightbox.create (`<img width='' height='' src=''/>`,
{
    onShow: (instance) => {
        document.addEventListener('keydown', handlerEscModal);
    },

onClose: (instance) => {
    document.removeEventListener('keydown', handlerEscModal);
},
})

function handlerImg(evt) {
evt.preventDefault();

const datasetSource = evt.target.dataset.source;//отримую значення атрибуту data-source з елемента, на який було здійснено клік. коли клікаєш на зображення в галереї, здійснюється обробка події click. За допомогою evt.target отримую посилання на сам елемент, на який було здійснено клік (у даному випадку - зображення мініатюри).
console.log(datasetSource);
if (!datasetSource) return;

instance.element().querySelector('img').src = datasetSource;
instance.show();
}

function handlerEscModal(evt) {
    if (evt.key === 'Escape') {
      instance.close() 
      return;
    };
  };


  
  //const datasetSource = evt.target.dataset.source;//отримую значення атрибуту data-source з елемента, на який було здійснено подію - клік. коли клікаєш на зображення в галереї, здійснюється обробка події клік. За допомогою evt.target отримую посилання на сам елемент, на який було здійснено клік (у даному випадку - зображення мініатюри).

  //instance.element().querySelector('img').src = datasetSource;
//instance.element() - дає доступ до HTML-елемента, який використовується в модальному вікні створеному з допомогою basicLightbox.instance.element() повертає елемент, який був створений для модального вікна.
//querySelector('img') шукає перший елемент <img> всередині елемента модального вікна. 
// забезпечується відображення правильного оригінального зображення в модальному вікні під час перегляду зображень у галереї.

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
   
  });
  //lightbox - різні штучки, документація легка