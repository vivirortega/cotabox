import joi from "joi";

export const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    participation: joi.number().required()
})