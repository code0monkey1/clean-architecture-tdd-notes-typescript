import { TNoteRequestModel, TNoteResponseModel } from "../../models";

export interface INotesRepository{
    createNote(note :TNoteRequestModel):void
    getNotes():Promise<TNoteResponseModel[]>
}