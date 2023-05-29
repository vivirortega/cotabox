import userRepository from "../repositories/userRepository.js";

export async function createUser(firstName, lastName, participation){
  await userRepository.createUser(firstName,lastName,participation)
}

export async function getUsers(){
  return await userRepository.getUsers()
}


const userService = { createUser, getUsers}

export default userService;