import { z } from "zod"; 

export const userSchema = z.object({

    email: z.string().email( "Email inválido" ),
    name: z.string().min(3,"O nome é obrigatório"),
    password: z.string().min(8,"A senha deve conter no mínimo 8 caracteres")

})