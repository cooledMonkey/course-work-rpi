import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 
import { StatusLabel } from '../const.js';


function createTemplate(filename, status) {
    return (
        `
            <li class = "results__item">
                <p class = "results__file-name">${filename}</p>
                <div class = "results__status results__${status}">${StatusLabel[status]}</div>
            </li>
        `
      );
}


export default class ResultListItemComponent extends AbstractComponent {
  #handleClick = null 
  constructor({filename, status}){
    super();
    this.filename = filename;
    this.status = status;
  }

  get template(){
        return createTemplate(this.filename, this.status);
  }
}