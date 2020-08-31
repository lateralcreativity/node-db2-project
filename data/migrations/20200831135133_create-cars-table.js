
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('vin', 17).notNullable();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('mileage').notNullable().unsigned();
        table.string('transmission');
        table.string('title');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};
