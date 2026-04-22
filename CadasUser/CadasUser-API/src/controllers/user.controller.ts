import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

//vamos criar as funções para criar, deletar e pegar um usuário por id

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email , name , password } = req.body
        const user = await prisma.user.create({
            data: { email , name , password }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }
}
export const getUser = async (req: Request, res: Response) => {
    const {id} = req.params //nao vou usar request pelo ID por enquanto.
    const { email } = req.params
    try{
        if(!email){
            res.status(400).json({ error: 'Email é obrigatório' })
            return
        } 
        const user = await prisma.user.findUnique({
            where: { email: String(email)},
            select:{
                id: true,
                name: true,
                email: true,
                password: false
            }
        })
        if(!user){
            res.status(404).json({ error: 'Usuário não encontrado' })
            return
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor 🌐' })
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    const { id }  = req.params
    try{
        await prisma.user.delete({
            where: { id: Number(id)}// vai buscar o usuario pelo id e deletar.
        })
        res.status(200).json({ message: 'Usuário deletado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' }) //caso nao encontrar o usuario ou outro erro, retorna um erro 500.
    }
}