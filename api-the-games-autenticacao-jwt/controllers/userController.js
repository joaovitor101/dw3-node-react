import userService from "../services/userServices.js";
import jwt from "jsonwebtoken";
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await userService.create(name, email, password);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Autenticando usuario
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email e senha são obrigatórios." });
        }

        const user = await userService.getOne(email);

        if (user) {
            if (user.password === password) {
                // Gerar token
                jwt.sign(
                    { id: user._id, email: user.email },
                    JWTSecret,
                    { expiresIn: "48h" },
                    (error, token) => {
                        if (error) {
                            return res.status(400).json({ error: "Falha interna ao gerar token." });
                        }
                        return res.status(200).json({ token });
                    }
                );
            } else {
                return res.status(401).json({ error: "Senha incorreta." });
            }
        } else {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};

export default { createUser, loginUser };