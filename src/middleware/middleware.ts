import { NextFunction, Request, Response, Router, json } from "express";
import { User } from "./user";

const routes = Router();
routes.use(json());

const ids = [
    1, 2, 10, 100, 999
];

const users: Array<User> = [];

// Exercicio 1 - log
const middlewarelog = (req: Request, res: Response, next: NextFunction) => {
    console.log(`--- Log ---\n  - Método: ${req.method}\n  - URL: ${req.originalUrl}\n  - IP: ${req.ip}`);
    next();
};

// Exercicio 2 - verificação de parâmetro
const verifyIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.id) {
        return res.status(400).send({
            message: "id is missing"
        });
    }

    next();
};

// Exercicio 3 - verificação de parâmetro
const checkIdValidityMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!ids.find(id => id == parseInt(req.query.id as string))) {
        return res.status(404).send({
            message: "id not found"
        });
    }

    next();
}

// Exercicio 4 - verificação de validade do id gerado em uma rota post
const checkUserIdValidity = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!users.find(user => user.id == id)) {
        return res.status(404).send({
            message: "user not found"
        });
    }

    next();
}

routes.use(middlewarelog);

// Definição das rotas  
routes.get("/", (req, res) => {
    res.send({
        message: "everything is ok"
    });
});

routes.get("/id", [verifyIdMiddleware, checkIdValidityMiddleware], (req: Request, res: Response) => {
    const { id } = req.query;

    return res.send({
        message: "it is okay",
        data: {
            id
        }
    });
});

routes.post("/user", (req: Request, res: Response) => {
    const { email, password } = req.body;

    const createdUser = new User(email, password);
    users.push(createdUser);

    return res.send({
        message: "user successfully created",
        token: createdUser.id,
        user: createdUser
    });
});

routes.get("/user/:id", checkUserIdValidity, (req: Request, res: Response) => {
    const id = req.params.id.toString();
    const obtainedUser = users.find(user => user.id == id);

    return res.send({
        user: obtainedUser,
        message: "it is ok"
    });
});

export default routes;