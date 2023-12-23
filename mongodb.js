//lets require/import the mongodb native drivers.


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://thanhlocpc:Nguyenthanhloc1@cluster0.nkritlu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function connect(){

//     try {
//         client.connect(async(err) => {
//           return await client.db("movie")
//         });

//     } catch (error) {
//         console.log("connect fail");
//     }
// }

// connect()


import mongoose from "mongoose";



const connectDB = async () => {
    try {
      const uri = process.env.MONGODB_URI
      let uriDb = Buffer.from(uri, 'base64').toString('utf-8')
      uriDb = Buffer.from(uriDb, 'base64').toString('utf-8')
      uriDb = Buffer.from(uriDb, 'base64').toString('utf-8')
      uriDb = Buffer.from(uriDb, 'base64').toString('utf-8')
      // uriDb = Buffer.from(uriDb, 'base64').toString('utf-8')

      await mongoose
        .connect(uriDb, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .catch((error) => console.log(error));
      mongoose.connection;
      console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
connectDB();