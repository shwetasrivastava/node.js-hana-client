## A boiler plate for node.js app with HANA DB as database using hana-client package

## How to use

git clone <REPO NAME>

npm start

## Connection to HANA DB from node.js

''''
Mention the connection params in configs => dbConnection.js

Add the respective value in .env file.

connection call to HDB using @sap/hana-client in app.js

const connection = hanaClient.createConnection();
connection.connect(connectionParams, (err) => {
    if(err){
        console.error("Connection error",err);
    }
    else{
        console.log("Established successfully");
    }

});

use the connection object anywhere within the project to fetch the result set

global.connection = connection;

## Execution of SQL queries using the statements provided by hana-client

check services ==> dbService.js

Function to execute the SQL has been mentioned there.

To execute a simple SQL statement bind your call to

dbService.execute(query);

To execute the batch operations use 

dbService.executeBatch(query,data);

For transaction enablement use 
commit, rollback and setAutocommit functions defined already.

For more details please visit to offical @sap/hana-client page:-

https://help.sap.com/viewer/0eec0d68141541d1b07893a39944924e/2.0.02/en-US/58c18548dab04a438a0f9c44be82b6cd.html