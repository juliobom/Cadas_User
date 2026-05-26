import { Request, Response } from 'express'
import { userSchema } from "../schemas/userSchema"
import { ZodError } from 'zod'
import { prisma } from '../lib/prisma'

//vamos criar as funções para criar, deletar e pegar um usuário por id


export const createUser = async (req: Request, res: Response) => {

    try {
        const data = userSchema.parse(req.body)

        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        })
        return res.status(201).json(user)
    }
    catch (error) {
        return res.status(400).json({ error: 'Erro ao criar usuário' })
    }
}

export const getUser = async (req: Request, res: Response) => {             //nao precisa de parametro para retornar um valor dps vamos fazer o filtro o qual so retorna o valor do email/nome digitado
    try{
        const user = await prisma.user.findMany({
            
            select:{
                id: true,
                name: true,
                email: true,
                password: false
            }
        })
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor 🌐' })
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    const { id }  = req.params
    const { password } = req.body
    try{

        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!user){

           return res.status(404).json({error: "usuario nao encontrado"})
        }
        if(user?.password !== password){
            return res.status(404).json({error:"senha incorreta"})
        }

        await prisma.user.delete({

            where: { id: Number(id)}// vai buscar o usuario pelo id e deletar.
            })

            return res.status(200).json({ message: 'Usuário deletado com sucesso' })

    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor' }) //caso nao encontrar o usuario ou outro erro, retorna um erro 500.
    }
}