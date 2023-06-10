import { TNoteRequestModel } from '../../models/index';

export interface ICreateNoteUseCase{
           
      execute(noteRequest:TNoteRequestModel):void;
         
}