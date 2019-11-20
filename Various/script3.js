const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(elem => 
  elem.addEventListener('click', () => {
    if (elem.classList.contains('open')) {
      elem.classList.remove('open');
    } else {
      accordionItems.forEach(elem2 => elem2.classList.remove('open'));
      elem.classList.add('open');
    }
  })
);