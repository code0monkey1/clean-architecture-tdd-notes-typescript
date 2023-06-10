

import request from "supertest";
import { ICreateNoteUseCase } from "../../src/domain/interfaces/use-cases/create-note-use-case";
import { IGetAllNotesUseCase } from '../../src/domain/interfaces/use-cases/get-all-notes-use-case';
import { TNoteRequestModel, TNoteResponseModel } from "../../src/domain/models";
import Router from '../../src/presentation/routers/notes-router';
import server from '../../src/server';

class MockGelAllNotesUseCase implements IGetAllNotesUseCase {
                      
                  execute(): Promise<TNoteResponseModel[]> {
                      throw new Error("Method not implemented.");
                  }
                      
                }

class MockCreateNoteUseCase implements ICreateNoteUseCase {
                
                  execute(noteRequest: TNoteRequestModel): void {
                                throw new Error("Method not implemented.");
                  }                                       
                                    
                }
     
describe('routes',()=>{


      let mockGetAllNotesUseCase:IGetAllNotesUseCase
      let mockCreateNoteUseCase : ICreateNoteUseCase      

      beforeAll(()=>{
                mockGetAllNotesUseCase = new MockGelAllNotesUseCase()
                mockCreateNoteUseCase = new MockCreateNoteUseCase()

                const router = Router(mockGetAllNotesUseCase,mockCreateNoteUseCase)

                server.use('/notes',router)
      })

      beforeEach(()=>{
          jest.clearAllMocks()
      })

      describe('Get/notes',()=>{
                
          it('should get all notes',async()=>{

                        // Arrange
                        const ExpectedData:TNoteResponseModel[] = [{
                          content: "hello",
                          important: false,
                          id:"20"
                        }]
                        
                        jest.spyOn(mockGetAllNotesUseCase,'execute').mockImplementation(()=> Promise.resolve(ExpectedData))

                        // Act 
                        const response = await request(server).get("/notes")
                        

                        // Assert
                          expect(response.status).toBe(200)
                          expect(response.body).toStrictEqual(ExpectedData)
                          expect(mockGetAllNotesUseCase.execute).toBeCalledTimes(1)
                              
              })

          it("returns 500 on use case error", async () => {
                     
                      const FetchedData:TNoteRequestModel = {
               
                        important: false,
                        content: "hello"
                      }
                      
                      jest.spyOn(mockGetAllNotesUseCase, "execute").mockImplementation(() => Promise.reject(Error()))

                      const response = await request(server).get("/notes").send(FetchedData)
                      
                      expect(response.status).toBe(500)

                      expect(response.body.error).toStrictEqual("Error fetching notes data")
                      
                  });

          })


      describe('Post/notes',()=>{
          
            it('should create a note ,and get response status 201',async()=>{

                      
                    const FetchedData:TNoteResponseModel = {
                      id: "2",
                      important: false,
                      content: "hello"
                    }
                    
                    jest.spyOn(mockCreateNoteUseCase, "execute").mockImplementation(() => Promise.resolve(FetchedData))

                    const response = await request(server).post("/notes").send(FetchedData)
                     
                    expect(response.status).toBe(201)
                
                    expect(response.body).toStrictEqual(FetchedData)
              })

          })

            it("returns 500 on use case error", async () => {
                     
                      const FetchedData:TNoteResponseModel = {
                        id: "2",
                        important: false,
                        content: "hello"
                      }
                      
                      jest.spyOn(mockCreateNoteUseCase, "execute").mockImplementation(() => Promise.reject(Error()))

                      const response = await request(server).post("/notes").send(FetchedData)
                      
                      expect(response.status).toBe(500)

                      expect(response.body.error).toStrictEqual("Error creating note")
          });


          

    })