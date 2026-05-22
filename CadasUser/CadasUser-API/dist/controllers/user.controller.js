"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUser = exports.createUser = void 0;
const userSchema_1 = require("../schemas/userSchema");
const prisma_1 = require("../lib/prisma");
//vamos criar as funções para criar, deletar e pegar um usuário por id
const createUser = async (req, res) => {
    try {
        const data = userSchema_1.userSchema.parse(req.body);
        const user = await prisma_1.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
};
exports.createUser = createUser;
/*export const createUser = async (req: Request, res: Response) => {
    try {
        const { email , name , password } = req.body
        const user = await prisma.user.create({
            data: { email , name , password }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }
}*/
const getUser = async (req, res) => {
    const { id } = req.params; //nao vou usar request pelo ID por enquanto.
    const { email } = req.params;
    try {
        if (!email) {
            res.status(400).json({ error: 'Email é obrigatório' });
            return;
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { email: String(email) },
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            }
        });
        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro no servidor 🌐' });
    }
};
exports.getUser = getUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma_1.prisma.user.delete({
            where: { id: Number(id) } // vai buscar o usuario pelo id e deletar.
        });
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' }); //caso nao encontrar o usuario ou outro erro, retorna um erro 500.
    }
};
exports.deleteUser = deleteUser;
