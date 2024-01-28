import {connect, connection} from "mongoose";

const conn = {
    isConnected: false,
}

export async function connectDB(){

    if(conn.isConnected) return;

    const db = await connect("mongodb+srv://jaal:UGQPBVATQryrCOIU@learn-mongodb.3ftnt7u.mongodb.net/tasks_db?retryWrites=true&w=majority");

    // mongodb+srv://<username>:<password>@learn-mongodb.3ftnt7u.mongodb.net/?retryWrites=true&w=majority
   
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState

}

connection.on('connected', () => {
    console.log('MongoDB is connected')
});

connection.on('error', (err) => {
    console.log('Mongoose connection error', err)
});

// password: UGQPBVATQryrCOIU