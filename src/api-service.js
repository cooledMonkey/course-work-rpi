import ApiService from './framework/view/api-service.js';


const Method = {
 GET: 'GET',
 PUT: 'PUT',
 POST: 'POST',
 DELETE: 'DELETE',
};


export default class TasksApiService extends ApiService {

 get items() {
   return this._load({mode: 'no-cors', url: 'files'})
     .then(ApiService.parseResponse);
 }

 async sendFile(file){
    let formData = new FormData(); 
    formData.append('file', file);

    return this._load(
        {
            url: 'files',
            method : Method.POST,
            body: formData,
            
        }
    ).then(ApiService.parseResponse);
 }

  async getPreview(id) {
    const response = await this._load({
        url: `preview/${id}`,
        method: Method.GET,
        headers: new Headers({'Content-Type': 'application/json'}),
    });
    const parsedResponse = await ApiService.parseResponse(response);
        return parsedResponse;
    }
}
