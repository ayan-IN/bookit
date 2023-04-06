import nc from 'next-connect'
import connectDB from '../../../config/dbConfig.js'
import onError from '../../../middlewares/errors.js'
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from '../../../controllers/roomControllers'

const handler = nc({onError})
connectDB()

handler.get(getSingleRoom).put(updateRoom).delete(deleteRoom)

export default handler
