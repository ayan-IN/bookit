import Room from '../models/room.model'
import ErrorHandler from '@/utils/errorHandler'
import asyncErrors from '@/middlewares/asyncErrors'

//* @desc Get all rooms
//* @route GET /api/rooms
//* @access Public
const getAllRooms = asyncErrors(async (req, res) => {
  const rooms = await Room.find()
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  })
})

//* @desc Get particular room by ID
//* @route GET /api/rooms/[roomID]
//* @access Public
const getSingleRoom = asyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.roomID)
  if (!room) {
    // return res.status(404).json({
    //   success: false,
    //   error: 'Room not found with this ID!',
    // })
    return next(new ErrorHandler('Room not found with this ID!', 404))
  }
  res.status(200).json({
    success: true,
    room,
  })
})

//* @desc Create new room
//* @route POST /api/rooms
//* @access Private
const createNewRoom = asyncErrors(async (req, res) => {
  const room = await Room.create(req.body)
  res.status(201).json({
    success: true,
    room,
  })
})

//* @desc Update particular room by ID
//* @route PUT /api/rooms/[roomID]
//* @access Private
const updateRoom = asyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.roomID)
  if (!room) {
    return next(new ErrorHandler('Room not found with this ID!', 404))
  }
  const newRoomData = await Room.findByIdAndUpdate(req.query.roomID, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success: true,
    newRoomData,
  })
})

//* @desc Delete particular room by ID
//* @route DELETE /api/rooms/[roomID]
//* @access Private
const deleteRoom = asyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.roomID)
  if (!room) {
    return next(new ErrorHandler('Room not found with this ID!', 404))
  }
  await room.deleteOne()
  res.status(200).json({
    success: true,
    message: 'Room is deleted.',
  })
})

export { getAllRooms, getSingleRoom, createNewRoom, updateRoom, deleteRoom }
