const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-12345"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
]

morgan.token('body', (req) => {
  return JSON.stringify(req.body);
})

const customFormat = ':method :url :status :res[content-length] - :response-time ms :body';

app.use(morgan(customFormat))

app.get("/api/persons", (request, response) => {
  response.json(persons);
})

app.get("/info", (request, response) => {
  response.send(
    `Phonebook has info for ${persons.length} people <br/>${new Date()}`
  )
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find((person) => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = Math.floor(Math.random() * 100)
  return maxId
}

app.post("/api/persons", (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number is not defined"
    })
  }
  const personName = body.name
  const namefind = persons.find(person => person.name === personName)
  if (namefind) {
    return response.status(400).json({
      error: "name must be unique"
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)

  response.json(person)
  
})

const path = require('path');

app.use(express.static('build')); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT ||3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})