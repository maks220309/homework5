const http = require('http')
const fs = require('fs')
const path = require('path') 
const PORT = 3000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)
    const createPath2 = (page) => path.resolve(__dirname, 'pages', `${page}.json`)
    let basePath = ''
    switch (req.url) {
        case '/':
        case '/main':
        case '/home':
        case '/index':
        case '/index1':
        case '/page1':
            basePath = createPath('page1')
            res.statusCode = 200
        break
        case '/page2':
        case '/index2':
            basePath = createPath('page2')
            res.statusCode = 200
        break
        case '/page3':
        case '/index3':
            basePath = createPath('page3')
            res.statusCode = 200
        break
        case '/data':
        case '/database':
        case '/json':
            res.setHeader('Content-Type', 'text/json')
            basePath = createPath2('data')
            res.statusCode = 200
        break
        case '/page4':
        case '/index4':
            res.statusCode = 301
            res.setHeader('Location', 'page1')
            res.end()
        break
    }
    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500 
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})