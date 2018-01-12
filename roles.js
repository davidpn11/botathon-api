const clone = require("clone");
const config = require("./config");

const db = {};

const defaultData = {
  roles: [
    {
      id: "1",
      nome: "Ponto de quinta",
      data: "10/01/18 18:00",
      local: "Ponto do Espetinho",
      descricao: "Aquele espetinho e long neck de toda quinta",
      n_participantes: 3,
      participantes: "David, Luiz, Tati"
    },

    {
      id: "2",
      nome: "Baladinha Top",
      data: "13/01/2018 22:00",
      local: "Major Lock",
      descricao: "Rolê pra dançar até o chao",
      n_participantes: 7,
      participantes: "Luis, David, Tati, Camila, Alexandre, Ademilson, Balbo"
    },

    {
      id: "3",
      nome: "Rock Cabuloso",
      data: "12/01/2018 22:00",
      local: "Amsterdam Pubbh",
      descricao:
        "Role pros rockeiros de plantao escutar musica boa e mandar muito headbang",
      n_participantes: 4,
      participantes: "Tati, Mundim, Tulio, Assis"
    },

    {
      id: "4",
      nome: "Pre pre Carnaval",
      data: "20/01/2018 16:00",
      local: "Santa Tereza",
      descricao: "Carnaval sempre eh bom, entao resolvemos adiantar",
      n_participantes: 8,
      participantes: "Alexandre, Andre, Leticia, Rafa, David, Luis, Tati, Assis"
    },

    {
      id: "5",
      nome: "Take.Churasco",
      data: "28/01/2018 14:00",
      local: "Pilotis",
      descricao:
        "Eh churrasco mas todos sabemos que o pao de alho eh sempre a estrela do role",
      n_participantes: 11,
      participantes:
        "Alexandre, Andre, Luis, David, Tati, Mundim, Tulio, Marina, Camila, Pati, Velozo"
    }
  ]
};

const get = () => {
  return defaultData.roles;
};

const add = (id, nome) => {
  if (id && nome) {
    let currentIndex = defaultData.roles.findIndex(e => e.id === id);
    let current = defaultData.roles[currentIndex];
    current.n_participantes = current.n_participantes + 1;
    current.participantes = current.participantes.concat(", " + nome);
    defaultData.roles[currentIndex] = current;
    return current;
  }

  return false;
};

/*const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random()
      .toString(36)
      .substr(-8);
  }

  get(token).contacts.push(contact);

  return contact;
}; */

module.exports = {
  get,
  add
};
