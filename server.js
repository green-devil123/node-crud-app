const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name)=>{
    console.log(`my name is ${name}`);
})

eventEmitter.emit('greet', "Tarun");