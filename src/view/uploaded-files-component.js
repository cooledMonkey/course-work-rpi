import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
            <div class="uploaded_files__background">          
                <button class = "uploaded_files__button">Отправить на проверку</button>
            </div>
        `
      );
}


export default class UploadedFilesComponent extends AbstractComponent {
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }
}