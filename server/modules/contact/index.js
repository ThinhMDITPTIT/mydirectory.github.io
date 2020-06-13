// This list should be replace by a database table
const list = [
  {
    id: '1591181282737',
    name: 'Thinh Me',
    phone_number: '07564354',
    address: 'Viet Nam',
    mail_address: 'mdt@gmail.com'
  },
  {
    id: '1591181282952',
    name: 'Baby Shark',
    phone_number: '07222333',
    address: 'Viet Nam',
    mail_address: 'bbs@gmail.com'
  },
  {
    id: '1591181282863',
    name: 'My Pet',
    phone_number: '0726698',
    address: 'Viet Nam',
    mail_address: 'mp@gmail.com'
  }
]

function listContactHandler(req, res, next) {
  try {
    res.json(list)
  } catch(err) {
    next(err)
  }
}

function findContactById(req, res, next) {
  try {
    let id = req.params.id

    if(!id) {
      throw new Error('Params id required!')
    }
    let contact = list.find(item => item.id == id)
    if(!contact) {
      throw new Error(`Not found item with id: '${id}'`)
    }

    res.json(contact)
  } catch(err) {
    next(err)
  }
}

function createContactHandler(req, res, next) {
  try {
    let newContact = req.body.name

    if(!newContact || !newContact.name) {
      throw new Error(`Require item 'name'!`)
    }

    newContact.id = String(Date.now())
    list.push(newContact)

    res.json(newContact)
  } catch(err) {
    next(err)
  }
}

function updateContactHandler(req, res, next) {
  try {
    let data = req.body
    let id = req.body.id
    let newName = req.body.name

    if(!data || !data.id) {
      throw new Error(`Require contact 'id'!`)
    }
    if(!newName) {
      throw new Error(`Require contact 'name'!`)
    }

    let contact = list.find(item => item.id == id)
    if(!contact) {
      throw new Error(`Not found contact with id '${data.id}'`)
    }
    contact.title = newTitle

    res.json(contact)
  } catch(err) {
    next(err)
  }
}

function deleteContactHandler(req, res, next) {
  try {
    let id = req.params.id
    
    if(!id) {
      throw new Error(`Require contact 'id'!`)
    }

    let contactIndex = list.findIndex(item => item.id == id)
    if(!contactIndex < 0) {
      throw new Error(`Not found contact with id: '${id}'`)
    }
    let contact = list.splice(contactIndex, 1)
    
    res.json(contact)
  } catch(err) {
    next(err)
  }
}

module.exports = {
  listContactHandler,
  findContactById,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler
}