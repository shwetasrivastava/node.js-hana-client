// your business logic here

const data = require('../repositories/dataRepositories');
const dbService = require('../services/dbService');

exports.fetchResults = async function(req,res){
    try{
    const results = await dbService.execute(data.fetchDataset);
    res.json(results);
    }catch(err){
        res.json(err);
    }
}