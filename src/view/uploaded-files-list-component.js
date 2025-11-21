import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `   
                <ul class = "uploaded_files__list">
                    
                </ul> 
        `
      );
}


export default class UploadedFilesListComponent extends AbstractComponent {
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }
}