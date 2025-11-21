import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate(filename) {
    return (
        `
            <li class = "uploaded_files__item">${filename}</li>
        `
      );
}


export default class UploadedFilesItemComponent extends AbstractComponent {
  #handleClick = null 
  filename = null
  constructor({filename}){
    super();
    this.filename = filename
  }

  get template(){
        return createTemplate(this.filename);
  }
}