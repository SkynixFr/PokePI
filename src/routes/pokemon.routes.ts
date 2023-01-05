import { Router, Request, Response } from "express"
import Pokemon from "../models/pokemon.interface"
import * as PokemonController  from "../controllers/pokemon.controller"

const PokemonRouter = Router()

PokemonRouter.post('/',async (req:Request,res:Response) =>{
    try{
        const PokemonToSave : Pokemon = req.body
        const result=await PokemonController.create(PokemonToSave)
        return res.status(201).send(result);
    }catch(error){
        return res.status(400).send('Bad request: '+error)
    }
})

PokemonRouter.get('/',async (req:Request,res:Response) =>{
    try{
        const results=await PokemonController.getAll()
        return res.status(200).send(results);
    }catch(error){
        return res.status(400).send('Bad request: '+error)
    }
})



PokemonRouter.get('/:name',async (req:Request,res:Response) =>{
    const NamePokemon=String(req.params.name)
    try{
        const result = await PokemonController.getByName(NamePokemon)
        return res.status(200).send(result);
    }catch(error){
        return res.status(404).send('Bad request: '+error)
    }
})

PokemonRouter.put('/:id',async (req:Request,res:Response) =>{
    const idPokemon=Number(req.params.id)
    const PokemonToUpdate: Pokemon = req.body
    try{
        const result = await PokemonController.update(idPokemon, PokemonToUpdate);
        return res.status(200).send(result);
    }catch(error){
        return res.status(404).send('Bad request: '+error)
    }
})


PokemonRouter.delete('/:id', async (req: Request, res: Response) => {
    const idPokemon = Number(req.params.id);
    try {
        const result = PokemonController.deleteById(idPokemon);
        return res.status(204).send({success: result});
    } catch (error) {
        return res.status(404).send(error);
    } 
})

export default PokemonRouter;
