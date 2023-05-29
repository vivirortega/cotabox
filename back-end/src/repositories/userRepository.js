import db from "../db.js"

export async function createUser(firstName,lastName,participation) {
    return await db.collection("users").insertOne({
       firstName: firstName,
       lastName: lastName,
       participation: participation
    })
  }
  
const userRepository = { createUser}

export default userRepository;