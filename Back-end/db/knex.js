import knex from 'knex';

//Where and how it connects to the database
const connectKnex = knex({
    client: "sqlite3",
    connection: {
        filename: './db.sqlite3'
    }
});

export default connectKnex;