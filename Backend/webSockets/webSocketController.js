module.exports = async function(io) {
    io.on('connection', socket => {
        socket.on('messageFromUser', message => {
            socket.join(message['orderId'])
            socket.to('AdminRoom').emit('update', 'update')
            console.log()
            console.log()
            console.log()
            console.log()
            console.log(message['orderId'])
        })

        socket.on('newAdmin', message => {
            socket.join('AdminRoom')
            console.log()
            console.log()
            console.log()
            console.log()
            console.log("Присоединился новый админ")
        })

        socket.on('messageFromAdmin', message => {
            socket.to(message['orderId']).emit('update', 'update')
            console.log()
            console.log()
            console.log()
            console.log()
            console.log(message['orderId'])
        })
    })
}