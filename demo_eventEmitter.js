var events = require('events')
var eventEmitter = new events.EventEmitter()

//Create an eventhandler
var myEventHandler = function(){
    console.log('I hear a scream!')
}

//Assign event handler to event
eventEmitter.on('scream', myEventHandler)

//Fire the 'scream' event
eventEmitter.emit('scream')