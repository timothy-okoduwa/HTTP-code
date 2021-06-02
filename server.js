const http = require('http')
const port = 8000
const code= require("./Jsonfile/File.json")
const app = http.createServer((req,res)=>{
    res.setHeader('content-type','application/json')
    console.log('server created')
    console.log(code)
    res.write(JSON.stringify(code))
    res.end()
})



app.listen(port,()=>{
    console.log(`amen ${port}`)
})
