import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
        <ul class = "results__background">
                <li  class = "results__item">
                    <p class = "results__file-name">PRF_12345abcd.xml</p>
                    <div class = "results__status results__incorrect-file">некорректный файл</div>
                </li>
        </ul>
        `
      );
}


export default class ResultsComponent extends AbstractComponent {
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }
}