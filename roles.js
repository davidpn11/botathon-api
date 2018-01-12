const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  roles: [
      {
          nome: "Ponto de quinta",
          data: "10/01/18 18:00",
          local: "Ponto do Espetinho",
          descricao: "Aquele espetinho e long neck de toda quinta",
          n_participantes: 3,
          participantes: "David, Luiz, Tati",
      }
  ]
}

const get = () => { 
  return defaultData.roles
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
