module.exports = async function(io) {
    io.on('connection', socket => {
        socket.on('messageFromUser', message => {
            socket.join(message['orderId'])
            socket.to('AdminRoom').emit('update', 'update')
            console.log(io.sockets.adapter.rooms)
        })

        socket.on('newAdmin', message => {
            socket.join('AdminRoom')
        })

        socket.on('messageFromAdmin', message => {
            socket.to(message['orderId']).emit('update', 'update')
            console.log(io.sockets.adapter.rooms)
        })
    })
}