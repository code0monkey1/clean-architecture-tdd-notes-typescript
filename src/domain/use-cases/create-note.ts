import { INotesRepository } from '../interfaces/repositories/notes-repository';
import { ICreateNoteUseCase } from "../interfaces/use-cases/create-note-use-case";
import { TNoteRequestModel } from "../models";

export class CreateNote implements ICreateNoteUseCase{
    
    constructor(private readonly notesRepository:INotesRepository){}
 
    async execute(noteRequest: TNoteRequestModel) {
        
       await this.notesRepository.createNote(noteRequest)
       
    }
    
  
}