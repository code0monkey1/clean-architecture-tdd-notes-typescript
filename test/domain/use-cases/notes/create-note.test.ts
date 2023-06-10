import { INotesRepository } from '../../../../src/domain/interfaces/repositories/notes-repository';

import { TNoteRequestModel, TNoteResponseModel } from '../../../../src/domain/models';
import { CreateNote } from '../../../../src/domain/use-cases/create-note';
describe('create note', () => {  


      class MockNotesRepository implements INotesRepository{
        
        createNote(note: TNoteRequestModel): void {
          throw new Error('Method not implemented.');
        }
        
        getNotes(): Promise<TNoteResponseModel[]> {
          throw new Error('Method not implemented.');
        }
        
      }
     
      let mockNotesRepository:MockNotesRepository;
  
    beforeEach(()=>{

        jest.clearAllMocks()
        mockNotesRepository= new MockNotesRepository()
    })
     
     it('should have create-node-use-case defined', () => {
            
           expect(mockNotesRepository).toBeDefined()

           jest.spyOn(mockNotesRepository,"createNote")
               .mockImplementation((mockNote:TNoteRequestModel)=>{
               Promise.resolve(mockNote)
           })


           const createNoteUseCase = new CreateNote(mockNotesRepository)
           
           const mockNote:TNoteRequestModel = {
             content:"mock content",
             important:true
           }

           const result = createNoteUseCase.execute(mockNote)

           expect(mockNotesRepository.createNote).toBeCalledWith(mockNote)

           expect(mockNotesRepository.createNote).toBeCalledTimes(1)

     })
     
})
