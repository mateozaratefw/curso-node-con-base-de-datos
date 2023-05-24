const db = require("mongoose")
const Model = require("./model")
const uri = `mongodb+srv://mateo:mateo123@curso-node-con-bases-de.sbuquuu.mongodb.net/?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('[db connection] Database connected')
	})
	.catch( error => {
		console.error('[db connection] Connection failed', error.message) 
	});



function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

function getMessages() {
}

module.exports = {
  add: addMessage,
  list: getMessages
}