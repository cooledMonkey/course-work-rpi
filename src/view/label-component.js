import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
            <p class="uploaded_files__label">Загруженные файлы</p>
        `
      );
}


export default class LabelComponent extends AbstractComponent {
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }
}