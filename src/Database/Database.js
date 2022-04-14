import mongoose from "mongoose";
const server = "127.0.0.1:27017";
const database = "MongooseCheckpointDB"


class Database{


    constructor(){

        this.__connect();
    }

    __connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(
            () => {
                console.log('connextion à la bd avec succès')
            }
        )
        .catch(err => console.log("la connexion a la bd a échoué " + err))

    }

}

export default Database;