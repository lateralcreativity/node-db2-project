const db = require('../data/connection');

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

function get() {
    return db('cars')
}

function getById(id) {
    return db('cars')
    .where({ id: id })
    .first()
}

function create(car) {
    return db('cars')
    .insert(car, 'id')
    .then(id => {
        return getById(id)
    })
}

function update(changes, id) {
    return db('cars')
    .where({ id: id })
    .update(changes)
    .then(() => getById(id));
}

async function remove(id) {
    const removed = await getById(id);

    return db('cars')
    .where({ id: id })
    .del()
    .then(() => removed);
}