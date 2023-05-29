import userRepository from "../repositories/userRepository.js";

export async function createUser(firstName, lastName, participation){
  await userRepository.createUser(firstName,lastName,participation)
}

const userService = { createUser}

export default userService;