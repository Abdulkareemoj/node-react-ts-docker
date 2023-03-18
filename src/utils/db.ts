import mongoose from "mongoose";
import config from "config"

async function db(){
  const dbUri  = config.get("dbUrl") as string;
  try{
    await mongoose
    .connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(`Connected to DB at ${dbUri}`);

})
  }  catch (e){
    console.error(e);
  }
}

export default db;