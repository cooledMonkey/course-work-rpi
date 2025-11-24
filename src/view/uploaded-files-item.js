import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate(filename) {
    let string = "";
    for(let i = 0; i < filename.length; i++){
      string += filename[i];
      if(i!= 0 && i % 22 == 0){
        string += " ";
      }
    }
    return (
        `
            <li class = "uploaded_files__item">${string}</li>
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