// TODO: write your code here
// eslint-disable-next-line no-unused-vars
import ToogleProfessionalExp from './ToogleProfessionalExp';
import AnimationProfessionalExp from './AnimationProfessionalExp';

const proffesionalExp = new ToogleProfessionalExp(document.querySelector('#section__professional__container'));
proffesionalExp.toogleClass();
const animationProffesionalExp = new AnimationProfessionalExp(document.querySelector('#section__professional__container'));
animationProffesionalExp.translateBlock();
