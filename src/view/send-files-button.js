import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
            <button class = "uploaded_files__button">Отправить на проверку</button>
        `
      );
}


export default class SendFilesButton extends AbstractComponent {
  #handleClick = null 
  constructor({onClick}){
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template(){
        return createTemplate(this.filename);
  }

    #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}