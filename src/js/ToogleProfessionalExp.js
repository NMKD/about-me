/* eslint-disable class-methods-use-this */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
export default class ToogleProfessionalExp {
  constructor(element) {
    this.buttons = Array.from(element.querySelectorAll('#section__professional__buttons .btn'));
    this.content = Array.from(element.querySelectorAll('#section__professional__content__list .section_professional-exp-none'));
  }

  toogleClass() {
    this.buttons.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('#section__professional__buttons').querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        this.content.forEach((itemContent) => {
          itemContent.classList.remove('section-active');
          this.content[i].classList.add('section-active');
        });
      });
    });
  }
}
