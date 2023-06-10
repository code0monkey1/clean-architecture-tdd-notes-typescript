import { INotesRepository } from "../../../../src/domain/interfaces/repositories/notes-repository"
import { TNoteRequestModel, TNoteResponseModel } from "../../../../src/domain/models"

class MockNotesRepository implements INotesRepository{
 
  createNote(note: TNoteRequestModel): void {
    throw new Error("Method not implemented.")
  }
  getNotes(): Promise<TNoteResponseModel[]> {
    throw new Error("Method not implemented.")
  }
 
}
describe('get-all-notes-use-case',()=>{
          

        let mockNotesRepository:INotesRepository
             
        beforeEach(()=>{
               jest.clearAllMocks()
               mockNotesRepository = new MockNotesRepository()
            })
           
         describe('should get all notes', () => {
              
         
               
              
             
             test('get/notes , should return the 200 status code ',()=>{

                    
                jest.spyOn(mockNotesRepository,'getNotes').mockImplementation(()=>{
                     

                })
                 
             })
                 
           
         })
         
     
})