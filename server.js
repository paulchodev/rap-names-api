const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'BirthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'BirthName': 'unknown',
        'birthLocation': 'unknown'
    }
} 

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})