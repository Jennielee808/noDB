const express = require('express')
const ninjaController = require('./controllers/ninjas_controllers')


const app = express()
const PORT = 7777

app.use(express.json())

app.get('/api/ninjas', ninjaController.getNinjas)
app.post('/api/ninjas', ninjaController.addNinja)
app.delete('/api/ninjas/:id', ninjaController.deleteNinja)
app.put('./api/ninjas/:id', ninjaController.editNinja)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))