import { render, RenderPosition } from "../framework/render.js";

import UploadFilesComponent from "../view/upload-file-component.js";
import UploadedFilesComponent from "../view/uploaded-files-component.js";
import UploadedFilesListComponent from "../view/uploaded-files-list-component.js";
import LabelComponent from "../view/label-component.js";
import UploadedFilesItemComponent from "../view/uploaded-files-item.js";
import SendFilesButton from "../view/send-files-button.js";
import ResultsComponent from "../view/results-component.js";
import ResultListItemComponent from "../view/result-list-item.js";
import { Status } from "../const.js";

export default class UploadFilesPresenter{
    #uploadFilesComponent = null;
    #uploadedFilesComponent = new UploadedFilesComponent();
    #model = null;
    #uploadFilesContainer = null;
    #uploadedFilesContainer = null;
    #resultContainer = null;
    #sentFilesModel = null;
    #resultComponent = new ResultsComponent();
    #files = [];
    #onSendClick = null;
    #onUploadClick = null;


    constructor({uploadFilesContainer, uploadedFilesContainer, model, sentFilesModel, resultContainer, onSendClick,
    onUploadClick}){
        this.#uploadFilesContainer = uploadFilesContainer;
        this.#uploadedFilesContainer = uploadedFilesContainer;
        this.#model = model; 
        this.#uploadFilesComponent  = new UploadFilesComponent({onClick: onUploadClick, model: this.#model, files: this.#files})
        this.uploadedFilesListComponent = new UploadedFilesListComponent();
        this.#sentFilesModel = sentFilesModel;
        this.#model.addObserver(this.#handleModelChange.bind(this));
        this.#resultContainer = resultContainer;
        this.#onSendClick = onSendClick;
        this.#onUploadClick = onUploadClick;

        this.#sentFilesModel.addObserver(this.handleSentFilesChange.bind(this));
    }

    async handleSentFilesChange() {
        await this.#sentFilesModel.getItems();
        this.#renderSentFiles();
    }

    openFilePicker() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xml';
        const self = this;
    
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
                if (file) {
                    self.#files.push(file);
                    self.#model.addItem(file);
                }
        });
        fileInput.click();
    }
    
    async initModel(){
        await this.#sentFilesModel.init();
    }

    async init() {
        render(this.#uploadFilesComponent, this.#uploadFilesContainer, RenderPosition.BEFOREEND);
        render(this.#uploadedFilesComponent, this.#uploadedFilesContainer, RenderPosition.BEFOREEND);
        render(new LabelComponent({text: "Загруженные файлы"}), this.#uploadedFilesContainer, RenderPosition.AFTERBEGIN)
        
        await this.#sentFilesModel.init();

        render(this.uploadedFilesListComponent, this.#uploadedFilesComponent.element, RenderPosition.AFTERBEGIN);
        render(new SendFilesButton({onClick: this.#onSendClick}), this.uploadedFilesListComponent.element, RenderPosition.AFTEREND)
        this.#renderBoard()

        const dropZone = document.querySelector(".upload_files__placeholder");
        const self = this;
        let model = self.model;
if (dropZone) {
    let hoverClassName = 'hover';
  
    dropZone.addEventListener("dragenter", function(e) {
        e.preventDefault();
        dropZone.classList.add(hoverClassName);
    });
  
    dropZone.addEventListener("dragover", function(e) {
        e.preventDefault();
        dropZone.classList.add(hoverClassName);
    });
  
    dropZone.addEventListener("dragleave", function(e) {
        e.preventDefault();
        dropZone.classList.remove(hoverClassName);
    });
    dropZone.addEventListener("drop", function(e) {
        e.preventDefault();
        dropZone.classList.remove(hoverClassName);

        const files = Array.from(e.dataTransfer.files);
        self.#model.addItem(files[0]);
    });
}
        let filenameElement = document.querySelector('.preview__file-name');
        this.#renderSentFiles();
    }

    #renderItem(filename, container){
        const itemComponent = new UploadedFilesItemComponent({filename: filename});
        render(itemComponent, container.element, RenderPosition.BEFOREEND)
    }

    #renderBoard(){
        this.uploadedFilesListComponent.element.innerHTML = '';
        for(let i = 0; i < this.#model.items.length; i++){
            this.#renderItem(this.#model.items[i].name, this.uploadedFilesListComponent);
        }
    }

    #handleModelChange(){
        this.#renderBoard();
    }

    get tasks(){
        return this.#model.tasks;
    }
   
    #handleModelEvent(event, payload){
        switch(event){
            case UserAction.ADD_TASK:
            case UserAction.UPDATE_TASK:
            case UserAction.DELETE_TASK: 
                this.#renderBoard();
                break;
        }
    }

    async sendFiles(){
        for(let i = 0; i < this.#files.length; i++){
            this.#sentFilesModel.sendFile(this.#files[i]);
        }
        this.#files = []
        this.#model.deleteAll();
    }

    async #renderSentFiles(){
        const resultComponent = new ResultsComponent();
        this.#resultContainer.innerHTML = ''

        render(new LabelComponent({text: "Результаты проверки"}), this.#resultContainer, RenderPosition.BEFOREEND)
        render(resultComponent, this.#resultContainer, RenderPosition.BEFOREEND);


        for(let i = 0; i < this.#sentFilesModel.items.length; i++){
            let status = null;
            if(this.#sentFilesModel.items[i].status === "valid"){
                status = Status.VALID
            }
            else if(this.#sentFilesModel.items[i].status === "invalid"){
                status = Status.INVALID
            }
            else {
                status = Status.INCORRECT_FILE
            }
            const resultItem = new ResultListItemComponent({filename: this.#sentFilesModel.items[i].fileName, 
                status: status});
            render(resultItem, resultComponent.element, RenderPosition.BEFOREEND)
            resultItem.element.id = this.#sentFilesModel.items[i].id;
            let popupBg = document.querySelector('.popup__bg'); 
            let popup = document.querySelector('.popup'); 
            let openPopupButtons = resultItem; 
            let closePopupButton = document.querySelector('.close-popup'); 
            const self = this;
            const sentFilesModel = self.#sentFilesModel;
            const id = this.#sentFilesModel.items[i].id;
            resultItem.element.addEventListener('click', (e) => { 
                e.preventDefault(); 
                popupBg.classList.add('active'); 
                const filenameElement = document.querySelector('.preview__file-name');
                filenameElement.textContent = sentFilesModel.getItemById(id).fileName;
                const textElement = document.querySelector('.preview__file-content');
                let resString = "";
                const original = sentFilesModel.getItemById(id).text;
                for(let i = 0; i < original.length; i++){
                    resString += original[i];
                    if(i!= 0 && i % 70 == 0){
                        resString += " ";
                    }
                }
                textElement.textContent = resString;
            });

            closePopupButton.addEventListener('click',() => { 
                popupBg.classList.remove('active'); 
            });

            document.addEventListener('click', (e) => { 
                if(e.target === popupBg) { 
                    popupBg.classList.remove('active');
                    popup.classList.remove('active'); 
                }
            });
        }
    }
}


