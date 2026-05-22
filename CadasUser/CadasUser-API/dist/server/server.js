"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//import { prisma } from "../lib/prisma";
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // habilitando o CORS para permitir que o frontend acesse a API
app.use(express_1.default.urlencoded({ extended: true })); // dizendo para o express entender o formato urlencoded no corpo da requisição, ou seja, os dados enviados por um formulário HTML.
app.use(express_1.default.json());
app.use("/users", user_routes_1.default);
app.listen(3000, () => {
    console.log("Servidor rodando🤖🚀");
});
/*const stat = express();
stat.use(express.json());// dizendo para o express entender o formato json no corpo da requisição

async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users[0]?.email);
}


stat.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id }
    });
    //console.log(user);
    res.json(user);

})

stat.post("/users", async (req, res) => {
    const { name, email, password} = req.body;
    const user = await prisma.user.create({
        data: { name, email, password }
    })
    res.status(201).json(user);
})

stat.delete("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(400).send("usuario nao encontrado");
    }
    await prisma.user.delete({
        where: { id }
    })
    res.send(`Usuário deletado com sucesso!`);

})

stat.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})*/
//getUsers()
