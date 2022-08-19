const http = require('http')


const users = [
    {
        name: 'Garrett',
        job: 'swe',
        location: 'Texas'
    },
    {
        name: 'Sally',
        job: 'swe',
        location: 'Texas'
    },
    {
        name: 'Mike',
        job: 'swe',
        location: 'Texas'
    },
]

// create a port to listen on.
const PORT = 3000


// create server using http.createServer in var called server
const server = http.createServer()

// server.on('request', (req, res) => )
server.on('request', function(req, res)  {
    const items = req.url.split('/')
    if(items[1] === 'users') {
        
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        if(items.length === 3) {
            const specificUser = users[items[2]]
            res.end(JSON.stringify(specificUser))
        } else {
            res.end(JSON.stringify(users))
        }
    } else {
        console.log(req.url)
        const homeMessage = {
            message: 'this is the home screen',
            page: 'Home page'
        }
        res.end(JSON.stringify(homeMessage))
    }
})


// server.listen(PORT, callback)
server.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`)
})



















// const fs = require('fs')

// if(!process.argv[2]) {
//     const message = 'Please enter a command'
//     console.log(`${message}... USEAGE [create | read | update | delete]`)
// }

// const command = process.argv[2]
// const index = process.argv[3]

// if(command === 'read' && !index) {
//     fs.readFile('./pets.json', 'utf-8', function(err, data) {
//         if(err) {
//             console.log('Some error')
//             process.exit(1)
//         }

//         // log out the data if no error
//         let formattedData = JSON.parse(data)
//         formattedData[0].name = 'changed'
//         console.log(formattedData)
//      })
// } else if(command === 'read' && index) {
//     fs.readFile('./pets.json', 'utf-8', function(err, data) {
//         if(err) {
//             console.log(err)
//             process.exit(1)
//         }

//         let formattedData = JSON.parse(data)
//         if(index > formattedData.length || index < 0) {
//             console.log('out of bounds')
//         } else {
//             console.log(formattedData[index])
//         }

        
//     })


// }


























// // const fs = require('fs')

// // if(!process.argv[2]) {
// //     const message = "Please enter in some command..."
// //     console.log(`${message} Usage: [create | read | update| destroy] `)
// // } 

// // const command = process.argv[2]

// // if(command === 'read') {
// //     fs.readFile("./pets.json", "utf-8", function(err, fileData) {
// //         if(err) {
// //             console.log(err)
// //             process.exit(1)
// //         }
        
// //         let formattedData = JSON.parse(fileData)
// //         console.log(formattedData)
// //     })
// // }