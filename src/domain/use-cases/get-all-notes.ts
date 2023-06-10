import { INotesRepository } from '../interfaces/repositories/notes-repository';
import { IGetAllNotesUseCase } from '../interfaces/use-cases/get-all-notes-use-case';
import { TNoteResponseModel } from "../models";

export class GetAllNotes implements IGetAllNotesUseCase{
    
    constructor(private readonly notesRepository:INotesRepository){}
    
    execute(): Promise<TNoteResponseModel[]> {
          return this.notesRepository.getNotes()
      }
  
    
}