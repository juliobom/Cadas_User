import express from "express";
import cors from "cors";
//import { prisma } from "../lib/prisma";
import userRoutes from "../routes/user.routes"


const app = express();
app.use(cors())  // habilitando o CORS para permitir que o frontend acesse a API
app.use(express.urlencoded({ extended: true }));// dizendo para o express entender o formato urlencoded no corpo da requisição, ou seja, os dados enviados por um formulário HTML.
app.use(express.json());

app.use("/users", userRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando 🤖🚀");
    
})



          












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