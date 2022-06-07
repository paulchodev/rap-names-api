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
    'eminem':{
        'age': 49,
        'BirthName': 'Marshall Bruce Mathers III,',
        'birthLocation': 'Saint Joseph, Michigan'
    },
    'kendrick lamar':{
        'age': 34,
        'BirthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, California'
    },
    'snoop dogg':{
        'age': 50,
        'BirthName': 'Calvin Cordozar Broadus Jr.',
        'birthLocation': 'Long Beach, California'
    },
    'drake':{
        'age': 35,
        'BirthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Canada'
    },
    'jay-z':{
        'age': 52,
        'BirthName': 'Shawn Corey Carter',
        'birthLocation': 'Brooklyn, New York'
    },
    'dr. dre':{
        'age': 57,
        'BirthName': 'Andre Romelle Young',
        'birthLocation': 'Compton, California'
    },
    'dr. dre':{
        'age': 57,
        'BirthName': 'Andre Romelle Young',
        'birthLocation': 'Compton, California'
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

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})