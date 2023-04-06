const Room = require('../models/room.model')
const connectDB = require('../config/dbConfig')
const rooms = require('../data/rooms.json')

require("dotenv").config()
console.log(process.env.DB_REMOTE_URI)

connectDB()
console.log('Env in seeder : ', process.env.DB_REMOTE_URI)
const importData = async () => {
    try {
      await Room.deleteMany()
        console.log('Old database deleted!'.red.inverse)
        await Room.insertMany(rooms)
      console.log('New data pushed to database successfully!'.green.inverse)
      process.exit()
    } catch (error) {
      console.log(`${error}`.red.inverse)
      process.exit()
    }
}
const destroyData = async () => {
  try {
    await Room.deleteMany()
    console.log('Data destroyed successfully'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}