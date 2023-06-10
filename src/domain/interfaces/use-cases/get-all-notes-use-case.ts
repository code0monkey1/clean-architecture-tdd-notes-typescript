import { TNoteResponseModel } from '../../models/index';

export interface IGetAllNotesUseCase{
           
      execute():Promise<TNoteResponseModel[]>;
         
}