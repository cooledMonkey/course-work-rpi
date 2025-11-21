import UploadFilesComponent from "./view/upload-file-component.js";
import UploadedFilesListComponent from "./view/uploaded-files-list-component.js";
import UploadedFilesComponent from "./view/uploaded-files-component.js";
import { RenderPosition, render } from "./framework/render.js";
import ResultsComponent from "./view/results-component.js";
import UploadedFilesItemComponent from "./view/uploaded-files-item.js";
import LabelComponent from "./view/label-component.js";
import ResultListItemComponent from "./view/result-list-item.js";
import { Status } from "./const.js";

const bodyContainer = document.querySelector('.header');


const uploadFilesContainer = document.querySelector('.upload_files');
render(new UploadFilesComponent(), uploadFilesContainer, RenderPosition.BEFOREEND);




const uploadedFilesContainer = document.querySelector('.uploaded_files');
const uploadedFilesComponent = new UploadedFilesComponent();
const uploadedFilesListComponent = new UploadedFilesListComponent();
render(uploadedFilesComponent, uploadedFilesContainer, RenderPosition.BEFOREEND);
render(new LabelComponent(), uploadedFilesContainer, RenderPosition.AFTERBEGIN)
render(uploadedFilesListComponent, uploadedFilesComponent.element, RenderPosition.AFTERBEGIN);
render(new UploadedFilesItemComponent({filename: "PRF1prf123prf123p123 123123123132"}), uploadedFilesListComponent.element, RenderPosition.BEFOREEND)
render(new UploadedFilesItemComponent({filename: "PRF2"}), uploadedFilesListComponent.element, RenderPosition.BEFOREEND)




const resultsContainer = document.querySelector('.results');
const resultComponent = new ResultsComponent();
render(new LabelComponent(), resultsContainer, RenderPosition.BEFOREEND)
render(resultComponent, resultsContainer, RenderPosition.BEFOREEND);
render(new ResultListItemComponent({filename: "PRF123.xml", status: Status.VALID}), resultComponent.element, RenderPosition.BEFOREEND)
render(new ResultListItemComponent({filename: "PRF123.xml", status: Status.INVALID}), resultComponent.element, RenderPosition.BEFOREEND)
