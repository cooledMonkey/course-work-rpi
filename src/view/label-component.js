import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate(text) {
    return (
        `
            <p class="uploaded_files__label">${text}</p>
        `
      );
}


export default class LabelComponent extends AbstractComponent {
  #handleClick = null 
  constructor({text}){
    super();
    this.text = text;
  }

  get template(){
        return createTemplate(this.text);
  }
}