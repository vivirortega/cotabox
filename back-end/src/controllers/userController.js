import userService from "../services/userService.js";

export async function postUser(req, res){
    const {firstName, lastName, participation} = req.body;
    await userService.createUser(firstName, lastName, participation);
    res.sendStatus(201);

}