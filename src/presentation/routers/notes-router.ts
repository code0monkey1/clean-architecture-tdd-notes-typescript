import express, { Request, Response } from 'express';
import { ICreateNoteUseCase } from '../../domain/interfaces/use-cases/create-note-use-case';
import { IGetAllNotesUseCase } from '../../domain/interfaces/use-cases/get-all-notes-use-case';


export default function Router(getAllNotesUseCase:IGetAllNotesUseCase , createNoteUseCase:ICreateNoteUseCase){
        
          const router = express.Router()


          router.get('/',async(req:Request,res:Response) =>{
              
               
                try{
                       let result = await getAllNotesUseCase.execute()

                        res.send(result)
 
                }
                catch(e){
                
                       res.status(500).json({error : "Error fetching notes data"})
                }
             
          })


             router.post('/',async(req:Request,res:Response) =>{
              
               
                try{
                       let result = await createNoteUseCase.execute(req.body)

                        res.status(201).send(result)
 
                }
                catch(e){
                
                       res.status(500).json({error : "Error creating note"})
                }
             
          })



          return router;

}