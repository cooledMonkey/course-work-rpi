import UploadFilesComponent from "./view/upload-file-component.js";
import UploadedFilesListComponent from "./view/uploaded-files-list-component.js";
import UploadedFilesComponent from "./view/uploaded-files-component.js";
import { RenderPosition, render } from "./framework/render.js";
import ResultsComponent from "./view/results-component.js";
import UploadedFilesItemComponent from "./view/uploaded-files-item.js";
import LabelComponent from "./view/label-component.js";
import ResultListItemComponent from "./view/result-list-item.js";
import { Status } from "./const.js";
import UploadFilesPresenter from "./presenter/upload-files-presenter.js";
import UploadedFilesModel from "./model/uploaded-files-model.js";
import SentFilesModel from "./model/sent-files-model.js";
import PreviewComponent from "./view/preview-component.js";

const bodyContainer = document.querySelector('.header');
const uploadFilesContainer = document.querySelector('.upload_files');




const uploadedFilesContainer = document.querySelector('.uploaded_files');
const uploadedFilesComponent = new UploadedFilesComponent();
const uploadedFilesListComponent = new UploadedFilesListComponent();

const resultsContainer = document.querySelector('.results');

const previewContainer = document.querySelector('.preview_container');
render(new PreviewComponent(), previewContainer, RenderPosition.AFTERBEGIN);

const uploadFilesPresenter = new UploadFilesPresenter({
    uploadFilesContainer: uploadFilesContainer,
    uploadedFilesContainer: uploadedFilesContainer,
    model: new UploadedFilesModel(),
    sentFilesModel: new SentFilesModel(),
    resultContainer: resultsContainer
});

uploadFilesPresenter.init();

