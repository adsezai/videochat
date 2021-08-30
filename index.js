const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)

server.listen(process.env.PORT || 8080)

const io = new Server(server)

const rooms = {}

io.sockets.on('connection', function (socket) {
  socket.on('join', (roomId) => {
    // new user joined the room
    const userId = socket.id

    if (!rooms[roomId]) rooms[roomId] = []

    const currentUsers = [...rooms[roomId]]

    rooms[roomId].push(userId)

    socket.emit('all', currentUsers)
  })

  socket.on('sendSignal', ({ userToSignal, signal, callerId }) => {
    io.to(userToSignal).emit('userJoined', { signal, callerId })
  })

  socket.on('returnSignal', ({ callerId, signal }) => {
    io.to(callerId).emit('receivedSignal', { signal, id: socket.id })
  })
})
