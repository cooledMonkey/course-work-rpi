import { UpdateType, UserAction } from '../const.js';
import Observable from '../framework/observable.js';
import { sentFiles } from '../mock/sent-files.js';
import generateID from '../utils.js';


export default class SentFilesModel extends Observable{
    #items = sentFiles;
    #observers = [];
    #tasksApiService = null;

    get items(){
        
        return this.#items;
    }
    constructor({tasksApiService}) {
    super();
    this.#tasksApiService = tasksApiService;
    }

    async init() {
    try {
        const items = await this.#tasksApiService.items;
        this.#items = items;
    } catch(err) {
        this.#items = [];
    }
    this._notify(UpdateType.INIT);
 }

 async getItems(){
    this.#items = [];
    try {
        const items = await this.#tasksApiService.items;
        this.#items = items;
    } catch(err) {
        this.#items = [];
    }
    this._notify(UpdateType.MAJOR);
 }

    async addItem(name, status, text){
        const newItem = {
            id: generateID(),
            fileName: name,
            status: status,
            text: text
        };
        this.#items.push(newItem);
        this._notifyObservers();
        this._notify(UserAction.ADD_TASK, createdTask);
    }

    async sendFile(file){
    try {
        const item = await this.#tasksApiService.sendFile(file);
        } catch(err) {
        }
        this._notify(UpdateType.MAJOR);
        this._notifyObservers();
        this._notify(UserAction.ADD_TASK, file);
    }

    getItemById(id){
        for(let i = 0; i < this.#items.length; i++){
            if(this.#items[i].id == id){
                return this.#items[i];
            }
        }
    }

    deleteAll(){
      this.#items = [];
      this._notifyObservers();
    }

    addObserver(observer){
        this.#observers.push(observer);
    }

    removeObserver(observer){
        this.#observers = this.#observers.filter((obs) => obs !== observer);
    }

    _notifyObservers(){
        this.#observers.forEach((observer) => observer());
    }

}