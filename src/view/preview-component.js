import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createTemplate() {
    return (
        `
        <div class="popup__bg"> 
            <div class = "preview__background">
                <p class="close-popup">x</p> 
                <p class = "preview__file-name"></p>
                <p class = "preview__file-content"></p>
                </div>
            </div> 
        `
      );
}


export default class PreviewComponent extends AbstractComponent {
  constructor(){
    super();
  }

  get template(){
        return createTemplate();
  }

}