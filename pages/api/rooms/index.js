import nc from 'next-connect'
import connectDB from '../../../config/dbConfig.js'
import onError from '../../../middlewares/errors.js'
import {
  getAllRooms,
  createNewRoom,
} from '../../../controllers/roomControllers'
import colors from 'colors'

const handler = nc({ onError })
connectDB()

handler.get(getAllRooms).post(createNewRoom)

export default handler
