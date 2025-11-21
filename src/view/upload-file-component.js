import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
        <div>
            <p class="upload_files__label">Загрузить файлы</p>
            <div class="upload_files__background">
                <div class = "upload_files__placeholder">Или перетащить</div>
                <button class = "upload_files__button">Выбрать файлы</button>
        </div>
        `
      );
}


export default class UploadFilesComponent extends AbstractComponent {
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }
}