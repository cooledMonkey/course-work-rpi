const Status = {
    VALID : `valid`,
    INVALID: `invalid`,
    INCORRECT_FILE: `incorrect-file`
}

const StatusLabel = {
    [Status.VALID]: `подпись действительна`,
    [Status.INVALID]: `подпись недействительна`,
    [Status.INCORRECT_FILE]: `некорректный файл`
}

const UpdateType = {
    PATCH: "PATCH",
    MINOR: "MINOR",
    MAJOR: "MAJOR",
    INIT: "INIT"
}

const UserAction = {
    UPDATE_TASK: "UPDATE_TASK",
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: "DELETE_TASK",
};

export {Status, StatusLabel, UpdateType, UserAction};