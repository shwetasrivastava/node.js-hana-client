const dotenv = require('dotenv');
dotenv.config({path: '.env'});

/**
 * connection parameters for connection to hana DB
 */
const connectionParams = {
    host: process.env.SAP_HANADB_URL,
    port: process.env.SAP_HANADB_PORT,
    user: process.env.SAP_HANADB_USER,
    password: process.env.SAP_HANADB_PASSWORD,
    dbname: process.env.SAP_HANADB_DBNAME,
    ENCRYPT: true,
    sslValidateCertificate: true
}

module.exports = connectionParams;