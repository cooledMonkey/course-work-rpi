import Observable from '../framework/observable.js';


export default class UploadedFilesModel extends Observable{
    #items = [];
    #observers = [];

    get items(){
        return this.#items;
    }

    addItem(file){
        this.#items.push(file);
        this._notifyObservers();
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