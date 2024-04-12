import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const characteristicsListElem = document.querySelector(
  '.characteristics__list'
);
const characteristicsItemElems = document.querySelectorAll(
  '.characteristics__item'
);

characteristicsItemElems.forEach(elem => {
  if (elem.children[1].classList.contains('active')) {
    elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
  }
});

const open = (button, dropDown) => {
  closeAllDrops(button, dropDown);
  dropDown.style.height = dropDown.scrollHeight + 'px';
  button.classList.add('active');
  dropDown.classList.add('active');
};

const close = (button, dropDown) => {
  button.classList.remove('active');
  dropDown.classList.remove('active');
  dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
  characteristicsItemElems.forEach(elem => {
    if (elem.children[0] !== button && elem.children[1] !== dropDown) {
      close(elem.children[0], elem.children[1]);
    }
  });
};

characteristicsListElem.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('characteristics__title')) {
    const parent = target.closest('.characteristics__item');
    const description = parent.querySelector('.characteristics__description');
    description.classList.contains('active')
      ? close(target, description)
      : open(target, description);
  }
});

new Accordion(container, options);
// Default options
new Accordion('.container-first');

// User options
new Accordion('.container-second', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});

// Define several accordions with the same options (pass an array with selectors)
new Accordion(['.container-first', '.container-second'], {});

// or pass an array with HTMLElements
const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {});

// Detach events
const accordion = new Accordion('.container-first');
accordion.detachEvents();
