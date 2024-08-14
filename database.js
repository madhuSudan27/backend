const { MongoClient } = require("mongodb");

const url = require("./secrets.js");
// console.log(url);

const client = new MongoClient(url);

const dbName = "Demo";

const dummyData = {
  firstName: "Rahul",
  lastName: "Sahani",
  city: "Lucknow",
  phoneNumber: "9876545678",
};

const dummyDataFault = {
  firstName: "Rahul",
  lastName: "Sahani",
  city: "Nagpur",
  phoneNumber: "9876545678",
};

const newDummyData = {
  firstName: "Rita",
  lastName: "Kumari",
  city: "Banglore",
  phoneNumber: "6545334256",
};

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // insert data using insertMany
  const insertResult = await collection.insertMany([dummyData]);
  console.log("Inserted documents =>", insertResult);

  // insertOne
  const insertResult1 = await collection.insertOne(newDummyData);
  console.log("Inserted documents =>", insertResult1);

  // insert faulty data
  const insertResult2 = await collection.insertOne(dummyDataFault);
  console.log("Inserted documents =>", insertResult2);

  const updateResult = await collection.updateOne(
    { firstName: "Rahul" },
    { $set: { phoneNumber: "1234567890" } }
  );
  console.log("Updated documents =>", updateResult);

  // delete the faulty data with name "Rahul " and city nagpur 
  const deleteResult = await collection.deleteOne({
    firstName: "Rahul",
    city: "Nagpur",
  });
  console.log("Deleted documents =>", deleteResult);
  // read the DB data
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
