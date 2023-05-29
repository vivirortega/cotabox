import db from "../db.js"

export async function createUser(firstName,lastName,participation) {
    return await db.collection("users").insertOne({
       firstName: firstName,
       lastName: lastName,
       participation: participation
    })
  }

export async function getUsers(){
  return await db.collection("users").find({}).toArray()

}
  
const userRepository = { createUser, getUsers }

export default userRepository;