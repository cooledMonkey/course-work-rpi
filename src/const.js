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

export {Status, StatusLabel};