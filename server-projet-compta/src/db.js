const Pool = require("pg").Pool;

const pool = new Pool({
    user: "bxoyjlqi",
    password: "cxy2puUbeV2I4AWrcxZMAWG8rU-FBCF0",
    database: "bxoyjlqi",
    host: "tyke.db.elephantsql.com",
    port: "5432"
});

module.exports = pool;