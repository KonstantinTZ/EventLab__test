
let burger = document.getElementById('burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('nav--active');

        document.body.classList.toggle('stop-scroll');
    })

// данной функцией по клику мы убираем добавленные классы у бургер меню хедр линка и боди, но делаем это через массив т.к. ссылок меню несколько

menuLinks.forEach(function (elem) {
    elem.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const validation = new JustValidate('.form');

validation

    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Вы не ввели имя"
    },
    {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше чем положено"
    }
    ])
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
    },
    {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
    }
    ])
    .addField('.tel', [{
        rule: "function",
        validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
        },
        errorMessage: 'Вы не ввели телефон',
    }])
    .addField(
        '#checkbox',
        [
          {
            rule: 'required',
            errorMessage: 'Это поле обязательное',
          },
        ],
        
      )


let contactInformationArray = []

document.getElementById('modal-form').addEventListener('submit', function (elem) {
    elem.preventDefault();
    let now = new Date()
    let newClientContact = {}
    newClientContact.id = self.crypto.randomUUID();
    newClientContact.date = now.toLocaleDateString();
    newClientContact.time = now.toLocaleTimeString();
    newClientContact.clientName = document.getElementById('client-name').value.trim()
    newClientContact.clientTel = document.getElementById('client-tel').value
    newClientContact.clientEmail = document.getElementById('client-email').value.trim()

    if (validation.isValid === true) {
        contactInformationArray.push(newClientContact)
        alert('Данные отправлены, с вами скоро свяжутся.')
        document.getElementById('client-tel').value = ''
        document.getElementById('client-name').value = ''
        document.getElementById('client-email').value = ''
        document.getElementById('checkbox').checked = false
        console.log('массив с контактной инфо, которую отправил клиент с сайта', contactInformationArray)
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let cardsArray = [
    {
        cardimg: 'img/card__image-1.jpg',
        cardTitle: 'ЖК &quot;Эконом&quot;',
        cardDescrOne: 'Паркинг',
        cardDescrTwo: 'Индивидулаьная парковка',
        cardMortgagePrice: '8 900'
    },
    {
        cardimg: 'img/card__image-2.jpg',
        cardTitle: 'ЖК &quot;Комфорт&quot;',
        cardDescrOne: 'Кирпичные дома',
        cardDescrTwo: 'Квартиры с террасами',
        cardMortgagePrice: '6 700'
    },
    {
        cardimg: 'img/card__image-3.jpg',
        cardTitle: 'ЖК &quot;Бизнес&quot;',
        cardDescrOne: 'Охраняемый двор',
        cardDescrTwo: 'Виды из окон',
        cardMortgagePrice: '10 900'
    },

  ]
  

  let cardsContainer = document.getElementById('cards-container')

  function cardsRender (cardimg, cardDescrOne, cardDescrTwo, cardTitle, cardMortgagePrice) {

    let card = document.createElement('div')
    card.classList.add = 'cars__item card'
    card.innerHTML = `
    
          <div class="card__img-wrapper">
            <img class="card__img card-img-top img" src=${cardimg} alt="иллюстрация ЖК">
            <div class="img__descr-wrapper">
              <span class="img__descr">${cardDescrOne}</span>
              <span class="img__descr">${cardDescrTwo}</span>
            </div>
          </div>
          <div class="card__text">
            <h5 class="card__title">
              ${cardTitle}
            </h5>
            <span class="card__descr mortgage">
              в ипотеку от ${cardMortgagePrice} руб.
            </span>
            <a class="card__link" href="#">
              Подробнее
            </a>
          </div>
        
    `
    cardsContainer.appendChild(card)
  }

  for (const item of cardsArray) {
    cardsRender (item.cardimg, item.cardDescrOne, item.cardDescrTwo, item.cardTitle, item.cardMortgagePrice)
  }