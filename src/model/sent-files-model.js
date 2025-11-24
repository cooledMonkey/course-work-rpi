import Observable from '../framework/observable.js';
import { sentFiles } from '../mock/sent-files.js';
import generateID from '../utils.js';


export default class SentFilesModel extends Observable{
    #items = sentFiles;
    #observers = [];

    get items(){
        return this.#items;
    }

    addItem(name, status, text){
        const newItem = {
            id: generateID(),
            filename: name,
            status: status,
            text: text
        };
        this.#items.push(newItem);
        this._notifyObservers();
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