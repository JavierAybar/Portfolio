// Menu mobile //
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguer = document.querySelector('.menu');
const menuX = document.querySelector('.menu-x');
const menuOption = document.querySelectorAll('.mobile-menu-option');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('menu-mobile-active');
}menuOption.forEach((option) => {
  option.addEventListener('click', toggleMobileMenu);
});

menuHamburguer.addEventListener('click', toggleMobileMenu);
menuX.addEventListener('click', toggleMobileMenu);

// Data for each card //

const cardObjects = [

  {
    name: 'Aybar Academy',
    description: '-This project is a web about the Aybar Academy (code academy), In this project I show some of my skills learned so far.',
    featuredImage: 'images/Capston-project.png',
    details: ['Aybar Academy', 'Front-end-skills', '2023'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linktoLiveVersion: 'https://javieraybar.github.io/Capstone_Project_01/',
    linKToSource: 'https://github.com/JavierAybar/Capstone_Project_01',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/SnapshootPortfolio(2).svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linktoLiveVersion: 'https://javieraybar.github.io/Portfolio/',
    linKToSource: 'https://github.com/JavierAybar/Portfolio',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/SnapshootPortfolio(3).svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linktoLiveVersion: 'https://javieraybar.github.io/Portfolio/',
    linKToSource: 'https://github.com/JavierAybar/Portfolio',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/SnapshootPortfolio(4).svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linktoLiveVersion: 'https://javieraybar.github.io/Portfolio/',
    linKToSource: 'https://github.com/JavierAybar/Portfolio',
  },
];

// Create popup windows //
const cardContainer = document.querySelector('.cards');
function showPopup(cardData) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.innerHTML = `  
   <div class="popup-card">
      <div class="header-card header-popup">
        <h2>${cardData.name}</h2>
        <img class="popup-icon-x" src="images/popup-icon-x.png" alt="">
        <ul>
          <li class="canopy-color">${cardData.details[0]}</li>
          <li class="icon-list">${cardData.details[1]}</li>
          <li class="icon-list">${cardData.details[2]}</li>
        </ul>
      </div>

      <figure class="cards-container-img popup-image">
        <img class="popup-img-card" src="${cardData.featuredImage}" alt="Project-img"/>
      </figure>

      <div class="popup-container-footer">
      <div class="paragraph-card paragraph-popup">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essent.
        </p>
      </div>

      <div class="popup-container-btn">
        <ul class="languages-card">
          <li>${cardData.technologies[0]}</li>
          <li>${cardData.technologies[1]}</li>
          <li>${cardData.technologies[2]}</li>
        </ul>
        <div class="popup-btn-section">
          <button class="btn popup-btn">See live<a href="${cardData.linktoLiveVersion}"></a><img src="images/circle-icon-popup.png" alt=""></button>
          <button class="btn popup-btn">See source<a href="${cardData.linKToSource}"></a><img src="images/githun-icon-popup.png" alt=""></button>
        </div>
      </div>
      </div>
    </div>`;

  cardContainer.appendChild(popupContainer);

  // Functionality for the button X popup //
  const popupBtnX = popupContainer.querySelector('.popup-icon-x');
  popupBtnX.addEventListener('click', () => {
    popupContainer.remove();
  });
}

// Create cards //

cardObjects.forEach((cardData, i) => {
  const createCard = document.createElement('div');
  createCard.classList.add('card');

  const figureClass = i === 0 || i === 2 ? 'card-order' : '';

  createCard.innerHTML = `<figure class="cards-container-img ${figureClass}">
<img
  class="img-card"
  src="${cardData.featuredImage}"
  alt="Project-img"
/>
</figure>
<section class="card-description">
<div class="header-card">
  <h2>${cardData.name}</h2>
  <ul>
    <li>${cardData.details[0]}</li>
    <li class="icon-list">${cardData.details[1]}</li>
    <li class="icon-list">${cardData.details[2]}</li>
  </ul>
</div>
<div class="paragraph-card">
  <p>${cardData.description}</p>
</div>
<div>
  <ul class="languages-card">
    <li>${cardData.technologies[0]}</li>
    <li>${cardData.technologies[1]}</li>
    <li>${cardData.technologies[2]}</li>
  </ul>
</div>
<div>
  <button class="btn seeMore" >See Project</button>
</div>
</section>`;

  cardContainer.appendChild(createCard);

  // this allows access to the button for the popup function //
  const seeMoreBtn = createCard.querySelector('.seeMore');
  seeMoreBtn.addEventListener('click', () => {
    showPopup(cardData);
  });
});

// Form validation email //

const formElement = document.getElementById('form');
const emailImput = document.getElementById('email');
const paragraphAlert = document.querySelector('.alertMessage');

formElement.addEventListener('submit', (event) => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (!pattern.test(emailImput.value)) {
    event.preventDefault();
    paragraphAlert.textContent = 'the email field has to be in lower case.';
  } else {
    paragraphAlert.textContent = '';
  }
});

// Local storage //

const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

// Save form data in local storage //
const saveFormData = () => {
  const formObjects = {
    name: nameInput.value,
    email: emailImput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formObjects));
};

// Load form data to the inputs //
const loadFormData = () => {
  if (localStorage.getItem('formData')) {
    const parseData = JSON.parse(localStorage.getItem('formData'));
    nameInput.value = parseData.name;
    emailImput.value = parseData.email;
    messageInput.value = parseData.message;
  }
};

formElement.addEventListener('input', () => {
  saveFormData();
});

loadFormData();
