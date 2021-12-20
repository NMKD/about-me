/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';
export default class AnimationProfessionalExp {
  constructor(element) {
    this.element = element;
  }

  translateBlock() {
    window.addEventListener('scroll', () => {
      if (this.element.getBoundingClientRect().y <= 700) {
        this.element.classList.add('section__professional_container_active');
      }
    });
  }
}
