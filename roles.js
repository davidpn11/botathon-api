const clone = require("clone");
const config = require("./config");

const db = {};

const defaultData = {
  roles: [
    {
      id: 1,
      nome: "Ponto de quinta",
      data: "10/01/18 18:00",
      local: "Ponto do Espetinho",
      descricao: "Aquele espetinho e long neck de toda quinta",
      n_participantes: 3,
      participantes: "David\n Luiz\n Tati",
      imagemURL: config.origin + "/espeto.jpg"
    },

    {
      id: 2,
      nome: "Baladinha Top",
      data: "13/01/2018 22:00",
      local: "Major Lock",
      descricao: "Rolê pra dançar até o chao",
      n_participantes: 7,
      participantes: "Luis\n David\n Tati\n Camila\n Alexandre\n Ademilson\n Balbo",
      imagemURL: config.origin + "/balada.jpg"
    },

    {
      id: 3,
      nome: "Rock Cabuloso",
      data: "12/01/2018 22:00",
      local: "Amsterdam Pubbh",
      descricao:
        "Role pros rockeiros de plantao escutar musica boa e mandar muito headbang",
      n_participantes: 4,
      participantes: "Tati, Mundim, Tulio, Assis",
      imagemURL: config.origin + "/rock.jpg"
    },

    {
      id: 4,
      nome: "Pre pre Carnaval",
      data: "20/01/2018 16:00",
      local: "Santa Tereza",
      descricao: "Carnaval sempre eh bom, entao resolvemos adiantar",
      n_participantes: 8,
      participantes:
        "Alexandre\n Andre\n Leticia\n Rafa\n David\n Luis\n Tati\n Assis",
      imagemURL: config.origin + "/carnaval.jpg"
    },

    {
      id: 5,
      nome: "Take.Churasco",
      data: "28/01/2018 14:00",
      local: "Pilotis",
      descricao:
        "Eh churrasco mas todos sabemos que o pao de alho eh sempre a estrela do role",
      n_participantes: 11,
      participantes:
        "Alexandre\n Andre\n Luis\n David\n Tati\n Mundim\n Tulio\n Marina\n Camila\n Pati\n Velozo",
      imagemURL: config.origin + "churrasco.jpg"
    }
  ]
};

const get = () => {
  return carrouselGenerator();
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

const getParticipants = (id) => {
  let resp = {}
  let event = defaultData.roles.find((el) => el.id == id);
  return { n_participants: `${event.n_participantes}`, participants: `${event.participantes}` }
}

const carrouselGenerator = () => {
  let content = {
    itemType: "application/vnd.lime.document-select+json",
    items: []
  };
  defaultData.roles.forEach(el => {
    let item = {
      header: {
        type: "application/vnd.lime.media-link+json",
        value: {
          title: el.nome,
          text: `${el.data} \n ${el.local}`,
          type: "image/jpeg",
          uri: el.imagemURL
        }
      },
      options: [
        {
          label: {
            type: "text/plain",
            value: "Mais informacões"
          },
          value: {
            type: "text/plain",
            value: "Mais informacões"
          }
        },
        {
          label: {
            type: "text/plain",
            value: "Participantes"
          },
          value: {
            type: "application/json",
            value: {
              type: "getParticipantes",
              id: el.id
            }
          }
        },
        {
          label: {
            type: "text/plain",
            value: "Quero ir!"
          },
          value: {
            type: "application/json",
            value: {
              type: "registrarParticipante",
              id: el.id
            }
          }
        }
      ]
    };
    content.items.push(item);
  });
  return content;
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
  add,
  getParticipants
};
